---
title: "CLI Installation"
description: "Install the Planton CLI on macOS, Linux, or Windows to manage cloud infrastructure from your terminal"
icon: terminal
order: 2
author:
  - name: Swarup Donepudi
    title: Founder & CEO
    bio: "Passionate about developer experience and open source hardware. Building tools that make developers smile."
    profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=SwarupDonepudi"
    twitter: https://x.com/swarupdonepudi
    github: https://github.com/swarupdonepudi
    linkedin: https://www.linkedin.com/in/swarupdonepudi

tags:
  - CLI
  - Installation
  - Getting Started
---

# Planton CLI

The Planton CLI brings the full power of Planton Cloud to your terminal. Deploy infrastructure, manage resources, and automate workflows—all without leaving your command line.

## Why use the CLI?

- **Scriptable deployments** - Integrate Planton Cloud into CI/CD pipelines and automation scripts
- **Faster workflows** - Power users can move faster with keyboard-driven commands
- **Local validation** - Validate configurations before deploying to catch errors early
- **Offline editing** - Work with YAML manifests locally, deploy when ready

## Quick install

Choose your platform:

| Platform | Command |
|----------|---------|
| **macOS** | `brew install plantonhq/tap/planton` |
| **Windows** | See [Windows installation](#install-on-windows) |
| **Linux** | See [Linux installation](#install-on-linux) |

---

## Install on macOS

### Homebrew (recommended)

The simplest way to install on macOS is via Homebrew:

```bash
brew install plantonhq/tap/planton
```

Homebrew automatically:
- Downloads the correct binary for your Mac (Intel or Apple Silicon)
- Places it in your PATH
- Removes the macOS quarantine attribute (no Gatekeeper warnings)

To verify the installation:

```bash
planton version
```

### Direct download

If you prefer not to use Homebrew, download the binary directly:

**Apple Silicon (M1/M2/M3):**

```bash
curl -Lo planton https://downloads.planton.ai/cli/v0.0.3/planton-v0.0.3-darwin-arm64
chmod +x planton
sudo mv planton /usr/local/bin/
```

**Intel Mac:**

```bash
curl -Lo planton https://downloads.planton.ai/cli/v0.0.3/planton-v0.0.3-darwin-amd64
chmod +x planton
sudo mv planton /usr/local/bin/
```

**Remove Gatekeeper quarantine:**

macOS flags downloaded binaries as untrusted. Remove the quarantine attribute:

```bash
xattr -dr com.apple.quarantine /usr/local/bin/planton
```

> **Tip:** Not sure which Mac you have? Run `uname -m`. If it shows `arm64`, you have Apple Silicon. If it shows `x86_64`, you have Intel.

---

## Install on Windows

### Windows Subsystem for Linux (WSL)

If you use WSL, install the Linux binary using curl:

**x86_64 (most systems):**

```bash
curl -Lo planton https://downloads.planton.ai/cli/v0.0.3/planton-v0.0.3-linux-amd64
chmod +x planton
sudo mv planton /usr/local/bin/
```

**ARM64:**

```bash
curl -Lo planton https://downloads.planton.ai/cli/v0.0.3/planton-v0.0.3-linux-arm64
chmod +x planton
sudo mv planton /usr/local/bin/
```

### PowerShell (native Windows)

For native Windows without WSL, open PowerShell as Administrator and run:

**Windows x64 (most systems):**

```powershell
# Download the CLI
Invoke-WebRequest -Uri "https://downloads.planton.ai/cli/v0.0.3/planton-v0.0.3-windows-amd64.exe" -OutFile "planton.exe"

# Move to a directory in your PATH (create if needed)
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\bin"
Move-Item -Path "planton.exe" -Destination "$env:USERPROFILE\bin\planton.exe"

# Add to PATH (run once)
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$env:USERPROFILE\bin*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$env:USERPROFILE\bin", "User")
}
```

**Windows ARM64:**

```powershell
# Download the CLI
Invoke-WebRequest -Uri "https://downloads.planton.ai/cli/v0.0.3/planton-v0.0.3-windows-arm64.exe" -OutFile "planton.exe"

# Move to a directory in your PATH (create if needed)
New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\bin"
Move-Item -Path "planton.exe" -Destination "$env:USERPROFILE\bin\planton.exe"

# Add to PATH (run once)
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$env:USERPROFILE\bin*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$env:USERPROFILE\bin", "User")
}
```

After adding to PATH, restart your terminal for changes to take effect.

> **Tip:** Check your architecture in PowerShell with `$env:PROCESSOR_ARCHITECTURE`. `AMD64` is x64, `ARM64` is ARM.

### Verify checksum on Windows

```powershell
# Download checksums
Invoke-WebRequest -Uri "https://downloads.planton.ai/cli/v0.0.3/checksums.txt" -OutFile "checksums.txt"

# Calculate hash of downloaded file
(Get-FileHash -Path "planton.exe" -Algorithm SHA256).Hash.ToLower()

# Compare with checksum in checksums.txt
Get-Content checksums.txt | Select-String "windows-amd64"
```

---

## Install on Linux

Download the binary directly for your architecture.

### x86_64 (amd64)

Most Linux servers and desktops use x86_64:

```bash
curl -Lo planton https://downloads.planton.ai/cli/v0.0.3/planton-v0.0.3-linux-amd64
chmod +x planton
sudo mv planton /usr/local/bin/
```

### ARM64 (aarch64)

For ARM-based systems like Raspberry Pi 4, AWS Graviton, or ARM cloud instances:

```bash
curl -Lo planton https://downloads.planton.ai/cli/v0.0.3/planton-v0.0.3-linux-arm64
chmod +x planton
sudo mv planton /usr/local/bin/
```

> **Tip:** Run `uname -m` to check your architecture. `x86_64` means amd64, `aarch64` means arm64.

### Verify checksum on Linux

For security-conscious installations, verify the download:

```bash
# Download checksums
curl -LO https://downloads.planton.ai/cli/v0.0.3/checksums.txt

# Verify (replace filename with your download)
sha256sum -c checksums.txt --ignore-missing
```

---

## Verify installation

After installing, verify the CLI works:

```bash
planton version
```

You should see output like:

```
planton version v0.0.3
```

If you get a "command not found" error, ensure the binary location is in your PATH.

---

## Authentication

Before using the CLI, authenticate with your Planton Cloud account:

### Step 1: Log in

```bash
planton auth login
```

This opens your browser to authenticate with your Planton Cloud credentials. After successful login, the CLI stores your session locally.

### Step 2: Set your organization context

```bash
planton context set --org your-org-name
```

This sets the default organization for all CLI commands. Replace `your-org-name` with your actual organization ID.

### Step 3: (Optional) Set environment context

```bash
planton context set --org your-org-name --env prod
```

Setting an environment makes it the default for resource operations, so you don't need to specify `--env` with every command.

### Verify context

```bash
planton context show
```

---

## Upgrading

### macOS (Homebrew)

```bash
brew update && brew upgrade planton
```

### Linux and Windows (direct download)

Download the latest version using the same installation steps above. Check the current version:

```bash
planton version
```

---

## Troubleshooting

### "command not found" after installation

The binary isn't in your PATH. Either:
- Move the binary to a directory already in your PATH (like `/usr/local/bin`)
- Add the binary's directory to your PATH

### macOS: "cannot verify developer" dialog

Run this to remove the quarantine flag:

```bash
xattr -dr com.apple.quarantine /usr/local/bin/planton
```

Or if you used Homebrew, reinstall:

```bash
brew reinstall planton
```

### Permission denied when installing

Use `sudo` to move the binary to system directories:

```bash
sudo mv planton /usr/local/bin/
```

Or install to a user directory that doesn't require root:

```bash
mkdir -p ~/.local/bin
mv planton ~/.local/bin/
# Add ~/.local/bin to your PATH in .bashrc or .zshrc
```

### Windows: "execution policy" error

If PowerShell blocks script execution, run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## What's next?

Now that you have the CLI installed:

1. **[Getting Started Guide](/docs/getting-started)** - Deploy your first resource
2. **[Platform Overview](/docs/platform)** - Understand how Planton Cloud works
3. **[InfraHub](/docs/infra-hub)** - Deploy cloud infrastructure via CLI

For CLI command reference:

```bash
planton --help
```
