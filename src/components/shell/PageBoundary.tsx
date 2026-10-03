import { Component, type ErrorInfo, type ReactNode } from "react";
import { RotateCw } from "lucide-react";
import { Button, ButtonLink } from "../controls";
import { Empty, Page } from "../layout";
import { isStaleCodeError, reloadOnce } from "../staleCode";

/** What the reader sees when a page cannot be shown. The header, search and footer keep working. */
function PageError({ stale }: { stale: boolean }) {
  return (
    <Page title="This page did not load" narrow>
      <Empty
        title="This page did not load"
        action={
          <span className="page-error__actions">
            <Button variant="primary" icon={RotateCw} onClick={() => window.location.reload()}>Reload</Button>
            <ButtonLink to="/">Go to the front page</ButtonLink>
          </span>
        }
      >
        {stale
          ? "The archive was updated while this tab was open, or the connection dropped. Reloading fetches the current version."
          : "Something went wrong while showing it. Reloading usually helps; the rest of the archive is still available from the menu."}
      </Empty>
    </Page>
  );
}

interface Props { /** The boundary clears itself when this changes (pass the pathname). */ resetKey: string; children: ReactNode }
interface State { error: unknown; key: string }

/**
 * Catches anything a page throws while rendering, including a page file that could not be fetched,
 * so one broken page never blanks the whole site. A fetch failure reloads once on its own (a new
 * deploy is the usual cause); anything else shows a short message with a way out.
 */
export class PageBoundary extends Component<Props, State> {
  state: State = { error: null, key: this.props.resetKey };

  static getDerivedStateFromError(error: unknown): Partial<State> {
    return { error: error ?? new Error("Unknown error") };
  }

  static getDerivedStateFromProps(props: Props, state: State): Partial<State> | null {
    return props.resetKey !== state.key ? { error: null, key: props.resetKey } : null;
  }

  componentDidCatch(error: unknown, info: ErrorInfo) {
    if (isStaleCodeError(error) && reloadOnce()) return;
    console.error("A page failed to render.", error, info.componentStack);
  }

  render() {
    return this.state.error ? <PageError stale={isStaleCodeError(this.state.error)} /> : this.props.children;
  }
}
