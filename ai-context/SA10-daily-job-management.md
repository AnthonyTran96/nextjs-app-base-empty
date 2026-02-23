# SA.10 — Quản lý job trong ngày

## Mô tả chung

- **Mục đích**: Quản lý các job phát sinh trong ngày. Khi job chạy tự động hoặc thủ công phát sinh lỗi, hệ thống tự động gửi mail cho danh sách địa chỉ email đã được cấu hình tại chức năng Quản lý tham số cấu hình mặc định (EMAIL_ALERT).

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Xem | Xem thông tin chi tiết của từng Job |
| 2 | Sửa | Chỉnh sửa thông tin cho Job hàng ngày |
| 3 | Chạy thủ công | Tự chạy Job khi thực thi bình thường không thành công hoặc khi muốn chạy thủ công |
| 4 | Bỏ qua | Cập nhật trạng thái "Đã bỏ qua" và không chạy tự động Job (không tự động thực hiện trong ngày khi đến giờ) |
| 5 | Kích hoạt | Kích hoạt lại job bị bỏ qua → cập nhật trạng thái "Đang chờ xử lý" |
| 6 | Chạy lại | Cập nhật trạng thái về "Đang chờ xử lý" và thực hiện chạy theo quy trình job tương ứng, không phân biệt trạng thái hiện tại |

---

## Sửa job hàng ngày

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Sửa job sinh dữ liệu thu phí định kỳ trong ngày |
| Actor | Người dùng |
| Trigger | Click "Sửa" tại job cần sửa trên chức năng "Quản lý job trong ngày" |
| Pre-condition | Người dùng được phân quyền |
| Post-condition | Sửa thành công thông tin job trong ngày |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Sửa" tại bản ghi job trên lưới |
| 2 | Hệ thống | Hiển thị màn hình Sửa job trong ngày |
| 3 | Người dùng | Cấu hình lại các thông tin cần thiết → "Xác nhận" |
| 4 | Hệ thống | Kiểm tra tính hợp lệ → Lưu thành công |
| 5 | Người dùng | Nhận thông báo thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Chỉ cho phép sửa các trường: Từ thời điểm, Đến thời điểm, Chạy lại job sau (s) |
| BR_02 | Chọn "Đóng" → không lưu |

---

## Chạy thủ công

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Thực hiện chạy Job thủ công ngay lập tức mà không cần check trạng thái hay thời gian chạy |
| Actor | Người dùng |
| Trigger | Click "Chạy thủ công" tại job cần chạy trên chức năng "Quản lý job trong ngày" |
| Pre-condition | Người dùng được phân quyền |
| Post-condition | Job chạy thành công |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Chạy thủ công" tại bản ghi job |
| 2 | Hệ thống | Hiển thị Pop-up xác nhận |
| 3 | Người dùng | Nhấn "Xác nhận" |
| 4 | Hệ thống | Thông báo "Đã thực hiện chạy job" |
| 5 | Người dùng | Nhận thông báo |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Hệ thống thực hiện chạy Job ngay lập tức mà không cần check trạng thái hay thời gian chạy |
| BR_02 | Khi job chạy tự động hoặc thủ công phát sinh lỗi, hệ thống tự động gửi mail cho danh sách email được thiết lập tại tham số EMAIL_ALERT |

### Thông tin Tab

- **Tab "Thông tin Job"**: Hiển thị thông tin cấu hình job
- **Tab "Trạng thái job"**: Hiển thị trạng thái thực thi job

## Màn hình tham khảo

> [Tham khảo URD trang 71–74 cho screenshots]
