# SA.07 — Danh mục điều kiện tính phí

## Mô tả chung

- **Mục đích**: Cho phép người dùng quản lý danh mục các điều kiện tính phí có thể áp dụng được trên hệ thống. Mỗi điều kiện tính phí cần phải được cấu hình định dạng và nguồn dữ liệu tại đây trước khi sử dụng tại màn hình thêm mới Code phí.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Thêm mới | Cho phép thêm mới bản ghi |
| 2 | Sửa | Cho phép sửa bản ghi |
| 3 | Xem | Cho phép xem bản ghi |
| 4 | Xóa | Cho phép xóa bản ghi |
| 5 | Tìm kiếm | Cho phép tìm kiếm dữ liệu trên lưới |
| 6 | Tải xuống | Cho phép kết xuất dữ liệu ra tệp |

## Thêm mới Trường điều kiện

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Thêm mới bản ghi Trường điều kiện tính phí |
| Actor | Người dùng |
| Trigger | Click vào nút "Thêm mới" tại chức năng "Danh mục điều kiện tính phí" |
| Pre-condition | Người dùng được phân quyền |
| Post-condition | Thêm mới thành công Trường điều kiện tính phí |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Thêm mới" |
| 2 | Hệ thống | Hiển thị màn hình Thêm mới |
| 3 | Người dùng | Nhập các thông tin của Trường điều kiện → Xác nhận |
| 4 | Hệ thống | Kiểm tra tính hợp lệ → Lưu thành công |
| 5 | Người dùng | Nhận thông báo "Thêm mới điều kiện thành công" |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Nhập đầy đủ các trường bắt buộc (*) trước khi chọn "Xác nhận" |
| BR_02 | Chọn "Đóng" → không lưu |
| BR_03 | Tên điều kiện và Mã điều kiện phải duy nhất |
| BR_04 | Trường "Kiểu dữ liệu" hiển thị danh sách: Number, String, Date (YYYY-MM-DD), Time (HH:MM:SS) |

## Màn hình tham khảo

> [Tham khảo URD trang 63–65 cho screenshots]
