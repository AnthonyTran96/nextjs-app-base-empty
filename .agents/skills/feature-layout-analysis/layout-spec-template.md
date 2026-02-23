# Layout Spec Template

Use this exact structure when generating `layout-spec.md`.

---

```markdown
# Layout Spec — {Feature Code} {Feature Name}

> Generated from: `{wireframe filename}` + `{markdown filename}`
> Date: {YYYY-MM-DD}
> Status: Draft | Reviewed | Approved

---

## Screens Overview

| # | Screen Name | Type | Trigger |
|---|-------------|------|---------|
| 1 | {name} | page/drawer/modal/dialog/section | {what opens it} |
| 2 | ... | ... | ... |

---

## Screen 1: {Screen Name}

### Layout Structure

```
{component-tree using indentation}
Root (div.p-20)
├── TabBar → AppSegment (options: [...])
├── Toolbar → Flex (justify: space-between)
│   ├── Left → Flex (gap: 20)
│   │   ├── SearchField → AppTextField (placeholder: "Tìm kiếm...", prefix: IC_SEARCH_OUTLINE2)
│   │   └── FilterBtn → ButtonBase (type: ghost, text: "Lọc nâng cao", leftIcon: IC_FILTER_OUTLINE)
│   └── Right → Flex (gap: 20)
│       ├── AddBtn → ButtonBase (type: ghost, text: "Thêm mới", leftIcon: ICON_EDIT)
│       └── ExportBtn → ButtonBase (type: primary, text: "Tải xuống", leftIcon: ICON_DROP_DOWN)
├── Divider → Divider
└── DataTable → AppTable (expandable, columns: [...], rowKey: "code")
```

### Table Columns

| # | Title | dataIndex | Width | Align | Render |
|---|-------|-----------|-------|-------|--------|
| 1 | Mã | code | 100 | center | TextBase link style |
| 2 | Tên | name | 200 | left | default |
| ... | ... | ... | ... | ... | ... |

### Actions

| Action | Component | Behavior |
|--------|-----------|----------|
| Click "Thêm mới" | ButtonBase | Opens Screen 2 (Drawer) |
| Click "Lọc nâng cao" | ButtonBase | Opens Screen 3 (Drawer) |
| Click row action "..." | Dropdown | Menu: Tạo mới / Chỉnh sửa / Xem / Xóa |

---

## Screen 2: {Screen Name}

### Layout Structure

```
Drawer (placement: right, width: 40vw)
├── Header → Flex (justify: space-between)
│   ├── Title → TextBase (preset: title5, text: "Thêm mới cấp đầu")
│   └── CloseBtn → IconSvgLocal (name: IC_CLOSE_OUTLINE)
├── Body → Flex (vertical, gap: 8)
│   ├── Field1 → AppTextField (label: "Tên *", placeholder: "Nhập tên")
│   ├── Field2 → AppTextField (label: "Mã *", placeholder: "Nhập mã")
│   └── Field3 → AppTextField (label: "Mô tả", placeholder: "Nhập mô tả")
└── Footer → Flex (justify: end)
    └── SubmitBtn → ButtonBase (type: primary, text: "Xác nhận")
```

### Fields Detail

| # | Field | Component | Label | Required | Props |
|---|-------|-----------|-------|----------|-------|
| 1 | name | AppTextField | Tên * | Yes | placeholder: "Nhập tên" |
| 2 | code | AppTextField | Mã * | Yes | placeholder: "Nhập mã" |
| ... | ... | ... | ... | ... | ... |

---

## State Transitions

```
{flow diagram using text}
[Main List] --click "Thêm mới"--> [Drawer: Thêm mới SPDV]
[Main List] --click "Lọc nâng cao"--> [Drawer: Lọc SPDV]
[Main List] --click row action "Xóa"--> [Dialog: Xác nhận xóa]
[Drawer: Thêm mới] --click "Xác nhận"--> [Main List] (close drawer)
```

---

## Components Summary

| Component | Import Path | Count | Usage |
|-----------|-------------|-------|-------|
| AppTable | components/table | 1 | Main data grid |
| AppTextField | components/text-field | 5 | Search + form fields |
| ButtonBase | components/button | 4 | Toolbar + form actions |
| ... | ... | ... | ... |

---

## Missing Components

| UI Element | Description | Suggestion |
|------------|-------------|------------|
| {element} | {what it does} | Use antd `{Component}` directly / Create new component |

(Write "None — all UI elements covered by existing components" if nothing is missing)

---

## Mock Data

### TypeScript Interface

```typescript
interface SPDVRecord {
  code: string;
  name: string;
  category: string; // "1" to "6"
  status: 'active' | 'inactive';
  createdDate: string;
  createdBy: string;
  editedDate: string;
  editedBy: string;
  children?: SPDVRecord[];
}
```

### Sample Records

```typescript
const mockData: SPDVRecord[] = [
  {
    code: 'NV001',
    name: 'Chuyển tiền trong nước',
    category: '1',
    status: 'active',
    createdDate: '20/10/2025',
    createdBy: 'Nguyễn Văn A',
    editedDate: '15/01/2026',
    editedBy: 'Trần Thị B',
    children: [
      {
        code: 'NV001.01',
        name: 'Chuyển tiền nội bộ',
        category: '2',
        // ...
      }
    ]
  },
  // ... more records
];
```

---

## Notes & Assumptions

- {Any assumptions made during analysis}
- {Ambiguities in the wireframe}
- {Decisions that need user confirmation}
```
