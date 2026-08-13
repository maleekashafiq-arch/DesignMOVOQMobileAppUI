import { AppIcon } from "../components/AppIcon";

const sizes = [
  { px: 180, label: "iOS @3x (180px)" },
  { px: 120, label: "iOS @2x (120px)" },
  { px: 96, label: "Android (96px)" },
  { px: 64, label: "Small (64px)" },
  { px: 32, label: "Favicon (32px)" },
];

export function AppIconPreview() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-black text-gray-800 mb-1">MOVOQ App Icon</h1>
        <p className="text-gray-500 mb-8">Blue→cyan→teal tile · ascending “M” = motion · gold token = rewards</p>

        {/* Hero */}
        <div className="bg-white rounded-3xl shadow-lg p-10 flex items-center justify-center mb-8">
          <AppIcon size={256} />
        </div>

        {/* Size ladder — verify legibility at small sizes */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
          <h2 className="font-bold text-gray-800 mb-6">Scale check</h2>
          <div className="flex items-end flex-wrap gap-8">
            {sizes.map((s) => (
              <div key={s.px} className="flex flex-col items-center gap-2">
                <AppIcon size={s.px} />
                <span className="text-xs text-gray-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* On a phone homescreen mock */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="font-bold text-gray-800 mb-6">On a homescreen</h2>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 inline-flex flex-col items-center gap-2">
            <AppIcon size={72} />
            <span className="text-white text-xs">MOVOQ</span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          To export: the icon is a single SVG in <code>src/app/components/AppIcon.tsx</code>. Copy the
          <code>&lt;svg&gt;</code> and render/export to PNG at 1024×1024 (then downscale) for store assets.
        </p>
      </div>
    </div>
  );
}
