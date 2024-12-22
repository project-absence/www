---
title: Config
description: The config file is the file that is used to configure each module individually.
---

The config file is the file that is used to configure each module individually. Its **default path** is `~/.absence/config.toml` and has the following **default content**:

```toml
[enumerate_files]
enabled = false

[enumerate_subdomains]
enabled = false

[passive_dns]
enabled = false

[port_scanner]
enabled = false
```

Every module can be `enabled` by setting its value to `true`. Some modules have settings that can be set specifically for that module only.

## Enumerate Files

### `wordlist`

The path to the wordlist to use for this module.

### `files_extension`

The extension to append to the file names, **without** the dot. (**Default**: `php`)

## Enumerate Subdomains

### `wordlist`

The path to the wordlist to use for this module.

## Passive DNS

### `ignore_expired`

Ignore expired certificates.

### `recent_only`

Only care about the recently **(24 hours)** created certificates

## Port Scanner

### `range`

The range of port to scan for (always inclusive)
Examples:

- `1-20` -> Port 1 to 20
- `1-20,22,40-60` -> Port 1 to 20, port 22 and port 40 to 60

**Default**: Top 1000 most common ports of nmap
