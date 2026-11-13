# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A practice workspace of static web pages written in plain HTML/CSS/JS. There is no build system, package manager, linter, or test suite — open an `index.html` directly in a browser to run it. Not a git repository.

UI text is in Korean (`lang="ko"`).

## Structure

Each page is a self-contained directory with its own `index.html`; directories do not share assets.

- `index.html` (root) — a minimal "Hello World" page.
- `profile/` — self-introduction card page.
  - `index.html` holds all content as static markup.
  - `style.css` defines theme colors as CSS custom properties on `:root` (primary `#667eea`); restyle by changing those variables rather than individual rules.
  - `main.js` contains an empty `initApp()` called on `DOMContentLoaded` — the intended entry point for any future JS behavior.
- `Counter/` — counter app (+ / − / reset). Same purple `:root` theme as `profile/`; state is a single `count` variable in `main.js`, wired up in `initApp()`.

`test.txt` and `profile/text.txt` are empty scratch files.

## 주의
- 주석은 항상 한글로 달아줘