# SA.04 — Cấu hình chính sách mật khẩu

## Mô tả chung

- **Mục đích**: Cho phép người dùng quản lý và thiết lập cấu hình về chính sách và loại xác thực đối với các tài khoản đăng nhập.

### Hệ thống sử dụng cấu hình chính sách để:

1. **Đổi mật khẩu**: Mật khẩu khi đổi phải đảm bảo quy tắc đã thiết lập
2. **Đăng nhập**: Kiểm tra số lần đăng nhập sai tối đa, nếu vi phạm tài khoản sẽ bị khóa
3. **Cảnh báo**: Đưa cảnh báo nhắc nhở NSD khi sắp đến hạn đổi mật khẩu

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Xem | Cho phép xem cấu hình đang áp dụng |
| 2 | Sửa | Cho phép cấu hình lại chính sách mật khẩu |

## Các trường cấu hình

| STT | Tên trường | Bắt buộc | Định dạng | Ràng buộc | Mô tả |
|-----|------------|----------|-----------|-----------|-------|
| 1 | Độ dài mật khẩu tối thiểu | ★ | Number | > 0 | Nhập độ dài tối thiểu |
| 2 | Độ dài mật khẩu tối đa | ★ | Number | > 0, >= tối thiểu | Nhập độ dài tối đa |
| 3 | Mật khẩu chữ và số | ★ | Toggle | Có/Không | Bắt buộc mật khẩu chứa cả chữ và số. Mặc định = "Có" |
| 4 | Chữ in hoa trong mật khẩu | ★ | Number | >= 0 | Số chữ in hoa tối thiểu cần có |
| 5 | Chữ in thường trong mật khẩu | ★ | Number | >= 0 | Số chữ in thường tối thiểu cần có |
| 6 | Số trong mật khẩu | ★ | Number | >= 0 | Số chữ số tối thiểu cần có |
| 7 | Ký tự đặc biệt trong mật khẩu | ★ | Number | >= 0 | Số ký tự đặc biệt tối thiểu cần có |
| 8 | Số ngày có hiệu lực | ★ | Number | > 0 | Số ngày hiệu lực kể từ ngày tạo/cập nhật mật khẩu |
| 9 | Ngày thông báo hết hạn | ★ | Number | > 0 | Số ngày thông báo hết hạn cho NSD (gửi về mail) |
| 10 | Lịch sử lưu mật khẩu tối đa | ★ | Number | >= 0 | Mật khẩu không được trùng với n lần trước đó |
| 11 | Số lần đăng nhập sai tối đa | ★ | Number | >= 0 | Nếu vượt quá, tài khoản bị khóa |

## Sửa cấu hình chính sách mật khẩu

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Cập nhật cấu hình về chính sách mật khẩu |
| Actor | Người dùng |
| Trigger | Click vào nút "Sửa" tại chức năng "Cấu hình chính sách mật khẩu" |
| Pre-condition | Người dùng được phân quyền |
| Post-condition | Cập nhật thành công. Các user đăng nhập/đổi mật khẩu sau thời điểm cập nhật sẽ áp dụng theo chính sách mới |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Sửa" |
| 2 | Hệ thống | Hiển thị màn hình Sửa cấu hình chính sách mật khẩu |
| 3 | Người dùng | Nhập các trường thông tin cho Chính sách mật khẩu mới |
| 4 | Hệ thống | Kiểm tra tính hợp lệ → Lưu thành công |
| 5 | Người dùng | Nhận thông báo Sửa thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Nhập đầy đủ các trường bắt buộc (*) trước khi chọn "Xác nhận" |
| BR_02 | Chọn "Đóng" → không lưu |
| BR_03 | Các user đăng nhập lần đầu tiên kể từ thời điểm Sửa chính sách mật khẩu bắt buộc phải thay đổi password theo chính sách mới |

## Màn hình tham khảo

> [Tham khảo URD trang 51–54 cho screenshots]
