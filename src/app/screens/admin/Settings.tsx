import { useState } from "react";

export function Settings() {
  const [settings, setSettings] = useState({
    appName: "MOVOQ",
    supportEmail: "support@movoq.com",
    maxPointsPerDay: 10000,
    maxTicketsPerDay: 10,
    maxAdsPerDay: 20,
    dailyGoalReward: 50, // pts for completing daily step goal (matches mobile)
    adReward: 10, // pts per ad watched (matches mobile)
    streakReward: 5, // pts per day of streak kept (matches mobile)
    ticketConversionRate: 100,
    coachPrice: 299, // AI Coach subscription price (Rs/mo)
    enableNotifications: true,
    enableAds: true,
    enableLuckyDraws: true,
    enableTeams: true,
    enableAICoach: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Settings</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Configure platform settings and preferences
        </p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            General Settings
          </h3>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-700">
                App Name
              </label>
              <input
                type="text"
                value={settings.appName}
                onChange={(e) =>
                  setSettings({ ...settings, appName: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Support Email
              </label>
              <input
                type="email"
                value={settings.supportEmail}
                onChange={(e) =>
                  setSettings({ ...settings, supportEmail: e.target.value })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>
        </div>

        {/* Points Rules */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            Points Rules
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Max Points Per Day
              </label>
              <input
                type="number"
                value={settings.maxPointsPerDay}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    maxPointsPerDay: parseInt(e.target.value),
                  })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Daily Goal Reward
              </label>
              <input
                type="number"
                value={settings.dailyGoalReward}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    dailyGoalReward: parseInt(e.target.value),
                  })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Points Per Ad Watched
              </label>
              <input
                type="number"
                value={settings.adReward}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    adReward: parseInt(e.target.value),
                  })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Streak Reward (per day)
              </label>
              <input
                type="number"
                value={settings.streakReward}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    streakReward: parseInt(e.target.value),
                  })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>
        </div>

        {/* Ticket Rules */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            Ticket Rules
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Points Per Ticket
              </label>
              <input
                type="number"
                value={settings.ticketConversionRate}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    ticketConversionRate: parseInt(e.target.value),
                  })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Max Tickets Per Day
              </label>
              <input
                type="number"
                value={settings.maxTicketsPerDay}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    maxTicketsPerDay: parseInt(e.target.value),
                  })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>
        </div>

        {/* Ad Settings */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            Ad Settings
          </h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Enable Ads
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Allow users to watch ads for rewards
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={settings.enableAds}
                  onChange={(e) =>
                    setSettings({ ...settings, enableAds: e.target.checked })
                  }
                />
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00C9A7] peer-checked:after:translate-x-full"></div>
              </label>
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Max Ads Per Day
              </label>
              <input
                type="number"
                value={settings.maxAdsPerDay}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    maxAdsPerDay: parseInt(e.target.value),
                  })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>
        </div>

        {/* Feature Toggles */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            Feature Toggles
          </h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Push Notifications
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Enable push notifications for users
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={settings.enableNotifications}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      enableNotifications: e.target.checked,
                    })
                  }
                />
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00C9A7] peer-checked:after:translate-x-full"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Lucky Draws
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Enable lucky draw feature
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={settings.enableLuckyDraws}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      enableLuckyDraws: e.target.checked,
                    })
                  }
                />
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00C9A7] peer-checked:after:translate-x-full"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Team Features
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Enable coach and team functionality
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={settings.enableTeams}
                  onChange={(e) =>
                    setSettings({ ...settings, enableTeams: e.target.checked })
                  }
                />
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00C9A7] peer-checked:after:translate-x-full"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  AI Coach (Paid)
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Enable the premium AI Coach subscription
                </p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={settings.enableAICoach}
                  onChange={(e) =>
                    setSettings({ ...settings, enableAICoach: e.target.checked })
                  }
                />
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00C9A7] peer-checked:after:translate-x-full"></div>
              </label>
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-700">
                AI Coach Price (Rs/mo)
              </label>
              <input
                type="number"
                value={settings.coachPrice}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    coachPrice: parseInt(e.target.value),
                  })
                }
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
            Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
}
