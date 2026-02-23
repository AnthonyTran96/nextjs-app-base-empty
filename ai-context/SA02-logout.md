# SA.02 — Đăng xuất

## Mô tả chung

- **Mục đích**: Cho phép người dùng đăng xuất khỏi hệ thống.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Đăng xuất | Cho phép đăng xuất khỏi hệ thống |
| 2 | Đăng nhập | Cho phép quay trở lại màn hình đăng nhập (sau khi đã đăng xuất) |

## Đăng xuất

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Đăng xuất khỏi hệ thống |
| Actor | Người dùng |
| Trigger | Người dùng click vào chức năng "Đăng xuất" trên header của hệ thống |
| Pre-condition | Người dùng đã đăng nhập thành công vào hệ thống ProfiX |
| Post-condition | Đăng xuất thành công |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Đăng xuất" trên header của hệ thống |
| 2 | Hệ thống | Kết thúc phiên làm việc và đăng xuất thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Người dùng không tương tác với hệ thống trong khoảng thời gian n phút (n được quy định tại tham số SESSION_TIMEOUT, chức năng "Quản lý tham số mặc định"), hệ thống tự động đăng xuất |
| BR_02 | Các tác vụ đang thực hiện sẽ không được lưu khi người dùng chọn Đăng xuất |

## Màn hình tham khảo

> [Tham khảo URD trang 45–47 cho screenshots]
