import { Segmented } from "../controls";
import { usePrefs } from "./prefs";

/** The three reader settings. Used in the header panel and in the phone menu. */
export function ReaderSettings() {
  const [prefs, update] = usePrefs();
  return (
    <div className="reader-settings">
      <div className="reader-settings__row">
        <span className="label" id="rs-theme">Theme</span>
        <Segmented label="Theme" value={prefs.theme} onChange={(theme) => update({ theme })} options={[{ id: "night", label: "Night" }, { id: "paper", label: "Paper" }]} />
      </div>
      <div className="reader-settings__row">
        <span className="label" id="rs-text">Text size</span>
        <Segmented label="Text size" value={prefs.text} onChange={(text) => update({ text })} options={[{ id: "small", label: "Small" }, { id: "normal", label: "Medium" }, { id: "large", label: "Large" }]} />
      </div>
      <div className="reader-settings__row">
        <span className="label" id="rs-cites">Citation markers</span>
        <Segmented label="Citation markers" value={prefs.cites} onChange={(cites) => update({ cites })} options={[{ id: "show", label: "Show" }, { id: "hide", label: "Hide" }]} />
      </div>
      <p className="reader-settings__note">Hiding markers gives a clean page. Every chapter still lists its sources at the end.</p>
    </div>
  );
}
