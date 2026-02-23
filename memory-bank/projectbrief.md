# Project Brief

## Project Name
Anthony NextJS App Base (Empty)

## Overview
A production-ready Next.js 14 starter/base project that provides a solid foundation for building web applications. This is a reusable template with pre-configured architecture, authentication flow, state management, theming, internationalization, and a custom component library.

## Core Requirements
- Provide a clean, well-structured Next.js App Router base project
- Include authentication flow (login, route guards)
- Pre-configured state management with Redux Toolkit + persistence
- Built-in internationalization support
- Theme system with light/dark mode
- Custom UI component library built on top of Ant Design
- Environment-based configuration (dev, prod, mock)
- Mock server for local development without backend dependency

## Goals
- Accelerate new project bootstrapping
- Enforce consistent architecture and patterns across projects
- Minimize boilerplate setup for common features (auth, state, i18n, theming)
- Provide a scalable folder structure that works for small to large applications

## Target Product
**ProfiX** — Hệ thống Quản lý phí tập trung (Centralized Fee Management System) for PVcomBank. The base template is being extended to build this banking fee management application.

## Scope
This is a **base template** — it includes the foundational plumbing but minimal business logic. The "empty" variant provides the skeleton without domain-specific features, ready to be extended for any use case.

The project is now being used to build **ProfiX Phase 1**, which includes:
- Fee parameter management (SPDV, fee codes, fee formulas, fee schedules, promotions)
- Fee inquiry (tree view, by customer, history, periodic schedule)
- Approval workflow (pending tasks, my pending tasks)
- System administration (auth, user management, roles, job management)
