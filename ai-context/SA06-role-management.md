# SA.06 — Quản lý phân quyền

## Mô tả chung

- **Mục đích**: Cho phép quản lý các nhóm quyền trên hệ thống và phân quyền sử dụng các chức năng cho từng nhóm quyền sử dụng.
- **Lưu ý**: Chức năng này không bao gồm việc quản lý phân quyền dữ liệu. Nguyên tắc phân quyền dữ liệu cho các chức năng tra cứu/báo cáo được mô tả tại Phụ lục II.6.4.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Thêm mới | Cho phép thêm mới bản ghi |
| 2 | Sửa | Cho phép sửa bản ghi |
| 3 | Xem | Cho phép xem bản ghi |
| 4 | Xóa | Cho phép xóa bản ghi |
| 5 | Tìm kiếm | Cho phép tìm kiếm dữ liệu trên lưới |
| 6 | Tải xuống | Cho phép kết xuất dữ liệu ra tệp |

## Thêm mới Nhóm quyền

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Thêm mới Nhóm quyền |
| Actor | Người dùng |
| Trigger | Click vào nút "Thêm mới" tại chức năng "Quản lý phân quyền" |
| Pre-condition | Người dùng được phân quyền |
| Post-condition | Thêm mới thành công Nhóm quyền trong hệ thống |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Thêm mới" tại chức năng "Quản lý phân quyền" |
| 2 | Hệ thống | Hiển thị màn hình Thêm mới Nhóm quyền |
| 3 | Người dùng | Nhập thông tin nhóm quyền và tích chọn những quyền thuộc nhóm quyền → "Xác nhận" |
| 4 | Hệ thống | Kiểm tra tính hợp lệ → Lưu thành công |
| 5 | Người dùng | Nhận thông báo "Thêm mới Nhóm quyền thành công" |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Nhập đầy đủ các trường bắt buộc (*) trước khi chọn "Xác nhận" |
| BR_02 | Chọn "Đóng" → không lưu |
| BR_03 | Tên nhóm quyền và ID nhóm quyền phải duy nhất |
| BR_04 | Người dùng có thể tích chọn Toàn quyền trong 1 nhóm hoặc chọn 1 vài quyền trong nhóm |

## Màn hình tham khảo

> [Tham khảo URD trang 60–62 cho screenshots]
