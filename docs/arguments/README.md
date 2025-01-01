---
title: Arguments
description: There are command line argument (`project-absence --help`) that can be passed directly when staring the tool, and won't be taken from the config file.
---

There are command line argument (`project-absence --help`) that can be passed directly when staring the tool, and won't be taken from the [config file](/docs/config).

#### `--domain` / `-d`

The domain to run the tool on.

#### `--wordlist` / `-w`

:::info

You can set a wordlist for each module individually, in the [config file](/docs/config).

:::

The path to the wordlist to use. (**Default**: `/usr/share/wordlists/discovery/common.txt`)

#### `--config` / `-c`

Path to the [configuration file](/docs/config). (**Default**: `~/.absence/config.toml`)

#### `--file` / `-f`

The file path of where the resulting JSON database will be saved to (**Default**: `~/.absence/result.json`)

#### `--clipboard` / `-C`

Whether to copy the resulting JSON database to the clipboard

#### `--version` / `-V`

Display the version of the tool

#### `--debug` / `-D`

Whether to print the database at the end of execution in a tree format and some other debugging data

#### `--verbose` / `-v`

Whether to print some verbose data
