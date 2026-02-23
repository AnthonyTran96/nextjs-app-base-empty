# SA.01 — Đăng nhập

## Mô tả chung

- **Mục đích**: Cho phép người dùng đăng nhập vào hệ thống ProfiX.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Đăng nhập | Cho phép đăng nhập vào hệ thống |
| 2 | Xem | Cho phép hiển thị mật khẩu đã nhập |
| 3 | Tải lại | Cho phép tải lại chuỗi ký tự tại vùng ký tự Captcha |
| 4 | Ghi nhớ | Cho phép ghi nhớ mật khẩu đã nhập để đăng nhập nhanh ở các lần tiếp theo |

## Đăng nhập

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Đăng nhập vào hệ thống |
| Actor | Người dùng |
| Trigger | Người dùng truy cập địa chỉ link web của hệ thống ProfiX |
| Pre-condition | Username đã tồn tại trong hệ thống |
| Post-condition | Đăng nhập thành công, người dùng vào được màn hình Trang chủ |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Nhập Tên đăng nhập, Mật khẩu, mã CAPTCHA và chọn Đăng nhập |
| 2 | Hệ thống | Ghi nhận và xác thực thông tin. Điều hướng người dùng đến màn hình ở phiên đăng nhập trước hoặc dashboard |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Một tài khoản tại 1 thời điểm chỉ có thể đăng nhập ở 1 phiên làm việc |
| BR_02 | Khóa đăng nhập sau khi người dùng đăng nhập sai 5 lần liên tiếp |
| BR_03 | Người dùng không thể đăng nhập khi tài khoản ở trạng thái "Bị khóa" hoặc "Ngừng hoạt động" (dù có nhập thông tin đúng) |
| BR_04 | Người dùng có thể lựa chọn "Lưu thông tin của tôi" để đăng nhập nhanh ở các lần tiếp theo |
| BR_05 | Đối với trường hợp đăng nhập lần đầu thành công (kể từ khi tạo mới user hoặc Sửa cấu hình chính sách mật khẩu), hệ thống gọi đến màn hình đổi mật khẩu (tham chiếu đến SA.03) |
| BR_06 | Tên đăng nhập không phân biệt hoa thường |
| BR_07 | Mã CAPTCHA do hệ thống tự sinh, có phân biệt hoa thường |

## Màn hình tham khảo

> [Tham khảo URD trang 42–44 cho screenshots]
