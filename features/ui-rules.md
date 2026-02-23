# UI Rules — ProfiX Design Conventions

Các quy tắc UI bắt buộc tuân thủ khi phân tích layout và tạo prototype. File này được dùng chung cho skill `feature-layout-analysis` và `feature-prototype`.

---

## 1. Tái sử dụng layout cho các chế độ Xem / Sửa / Thêm mới / Duyệt / Từ chối

Các hành động **Xem chi tiết**, **Chỉnh sửa**, **Thêm mới**, **Phê duyệt**, **Từ chối duyệt** của cùng một đối tượng dữ liệu **phải dùng chung một layout** (cùng page hoặc cùng Drawer). Sự khác biệt giữa các chế độ chỉ nằm ở:

| Chế độ | Fields | Action buttons |
|--------|--------|----------------|
| **Thêm mới** | Editable, trống | "Xác nhận", "Đóng" |
| **Chỉnh sửa** | Editable, có dữ liệu | "Xác nhận", "Đóng" |
| **Xem chi tiết** | Read-only (disabled hoặc text) | "Đóng" |
| **Phê duyệt** | Read-only + hiển thị thay đổi | "Duyệt", "Từ chối", "Đóng" |
| **Từ chối duyệt** | Read-only + ô nhập lý do | "Xác nhận", "Đóng" |

**Chọn Page hay Drawer:**
- **Drawer** (mặc định): Dùng khi form có ít trường (≤ 10 fields), hoặc dữ liệu đơn giản
- **Page**: Dùng khi form phức tạp (nhiều trường, nhiều tab/section, bảng lồng bảng, hoặc cần không gian rộng để hiển thị)

Khi đã chọn Page hoặc Drawer cho một đối tượng, tất cả các chế độ (xem/sửa/thêm/duyệt) đều dùng cùng loại đó.

---

## 2. Đồng nhất UI giữa các tính năng

Các element cùng chức năng phải có **cùng kích thước, màu sắc, icon, khoảng cách** trên mọi trang. Cụ thể:

### Buttons
| Chức năng | Type | Icon | Text mẫu |
|-----------|------|------|-----------|
| Thêm mới | `ghost` | `ICON_EDIT` | "Thêm mới" |
| Tải xuống / Xuất file | `primary` | `ICON_DROP_DOWN` | "Tải xuống" |
| Lọc nâng cao | `ghost` | `IC_FILTER_OUTLINE` | "Lọc nâng cao" |
| Xác nhận / Lưu | `primary` | — | "Xác nhận" |
| Hủy / Đóng | `secondary` | — | "Hủy" / "Đóng" |
| Xóa (trong menu) | — | — | text đỏ (`danger: true`) |

### Search bar
- Component: `AppTextField` với `prefix` = `IconSvgLocal` (`IC_SEARCH_OUTLINE2`, 20×20)
- Placeholder: `"Tìm kiếm..."`
- Width: `w-[250px]`, Height: `h-44`

### Table action column
- Icon: `IconSvgLocal` (`ICON_MORE`, height 20)
- Trigger: `Dropdown` (click, placement `bottomRight`, arrow)
- Menu items theo thứ tự: Xem chi tiết → Chỉnh sửa → Xóa (danger)

### Drawer
- Placement: `right`
- Width: `40vw` (form đơn giản), `50vw` (form phức tạp hoặc detail view)
- `closable: false`, `maskClosable: false`
- Header: `Flex` (space-between) → Title + `IconSvgLocal` (`IC_CLOSE_OUTLINE`, 24px)
- Footer: `Flex` (justify: end) → Action buttons

### Form fields
- Input height: `rootClassName="h-44"`
- Vertical gap giữa fields: `gap-8`
- Label required: thêm ` *` sau label text (VD: `"Tên *"`)

### Spacing & Layout
- Page content padding: `p-20`
- Toolbar margin top: `mt-12`
- Toolbar gap giữa buttons: `gap-20`
- Divider giữa toolbar và table: `my-16`
- Table wrapper: `overflow-hidden rounded-radius-l border border-color-400 pb-4`
- Pagination margin top: `mt-8`, centered, với record count ở bên trái

### Status badges
- Hoạt động: `Status` type `SUCCESS`, text "Hoạt động"
- Ngừng hoạt động: `Status` type `ERROR`, text "Ngừng hoạt động"
- Chờ duyệt: `Status` type `PENDING`, text "Chờ duyệt"
- Từ chối: `Status` type `ERROR`, text "Từ chối duyệt"
- Đã duyệt: `Status` type `SUCCESS`, text "Đã duyệt"
