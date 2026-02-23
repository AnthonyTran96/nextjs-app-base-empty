# SA.03 — Đổi mật khẩu

## Mô tả chung

- **Mục đích**: Cho phép người dùng đổi mật khẩu đăng nhập hệ thống.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Xem | Cho phép xem mật khẩu đã nhập |

## Đổi mật khẩu

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Đổi mật khẩu đăng nhập |
| Actor | Người dùng |
| Trigger | Người dùng click vào chức năng "Đổi mật khẩu" trên header của hệ thống |
| Pre-condition | Người dùng đã đăng nhập thành công vào hệ thống ProfiX |
| Post-condition | Đổi mật khẩu thành công |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Đổi mật khẩu" trên header |
| 2 | Hệ thống | Hiển thị màn hình nhập thông tin Mật khẩu |
| 3 | Người dùng | Nhập: Mật khẩu cũ, Mật khẩu mới, Nhập lại mật khẩu mới |
| 4 | Hệ thống | Kiểm tra tính hợp lệ của mật khẩu mới → Lưu thành công |
| 5 | Người dùng | Nhận thông báo Đổi mật khẩu thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Mật khẩu mới không được trùng với mật khẩu cũ |
| BR_02 | "Mật khẩu mới" và "Nhập lại mật khẩu mới" phải nhập giống nhau |
| BR_03 | Mật khẩu mới phải tuân thủ cấu hình tại chức năng Cấu hình chính sách mật khẩu (SA.04) |
| BR_04 | Bắt buộc nhập đủ 3 trường: Mật khẩu cũ, Mật khẩu mới, Nhập lại mật khẩu mới trước khi chọn "Xác nhận" |
| BR_05 | Chọn "Đóng" → hệ thống không validate và không lưu mật khẩu mới |

## Màn hình tham khảo

> [Tham khảo URD trang 48–50 cho screenshots]
