# PetKit Timeline Card

Home Assistant card displaying your PetKit device's full visual history, styled after the official app.

- 🖼️ Photo history from HA local media storage
- 🔍 Click any photo to open fullscreen
- 🍽️ Automatic before/after bowl comparison
- 🥣 Feeding tab with dispenser schedule
- 🌍 Multi-language (ES, EN, FR, DE, PT, IT, NL, CA, PL)

## Minimal configuration

```yaml
type: custom:petkit-timeline-card
media_path: Petkit
```

## Full configuration

```yaml
type: custom:petkit-timeline-card
title: "My cat today"
media_path: Petkit
hours: 24
refresh_minutes: 10
language: en
dispenser_entity: sensor.feeder_distribution_data_raw
debug: false
```
