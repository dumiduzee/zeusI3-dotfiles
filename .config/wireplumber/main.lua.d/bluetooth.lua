-- Enable Bluetooth audio support
table.insert(alsa_monitor.rules, {
  matches = {
    {
      { "device.name", "matches", "bluez_card.*" },
    },
  },
  apply_properties = {
    ["bluez5.enable-sbc-xq"] = true,
    ["bluez5.enable-msbc"] = true,
    ["bluez5.enable-hw-volume"] = true,
  },
})
