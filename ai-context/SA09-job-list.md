# SA.09 — Danh sách Job sinh dữ liệu phí định kỳ

## Mô tả chung

- **Mục đích**: Quản lý các job trong ứng dụng đã được khai báo trong cơ sở dữ liệu. Mỗi code phí định kỳ chỉ được thu tại 01 job duy nhất.
- Sau khi kết thúc ngày, căn cứ thiết lập tại chức năng này, hệ thống tự động sinh ra danh sách job hàng ngày cho ngày làm việc mới tại chức năng "Quản lý job trong ngày" (SA.10).
- Nguyên tắc thu phí cụ thể trên R24 được mô tả tại tài liệu URD Yêu cầu thay đổi các hệ thống bên ngoài.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Thêm mới | NSD có thể thêm mới job |
| 2 | Xem | Xem thông tin chi tiết của từng job |
| 3 | Sửa | Chỉnh sửa thông tin của job |
| 4 | Đình chỉ | Tạm ngưng Job. Job vẫn được tạo ra trong "Quản lý job trong ngày" nhưng sẽ không tự động chạy |
| 5 | Ngừng đình chỉ | Thay đổi trạng thái Job từ Đình chỉ thành Hoạt động. Sau ngày làm việc tiếp theo, Job sẽ tự động chạy khi đến giờ |

## Thêm mới job

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Thêm mới job sinh thông tin phí định kỳ |
| Actor | Người dùng |
| Trigger | Click vào nút "Thêm mới" tại chức năng "Danh sách job sinh dữ liệu phí định kỳ" |
| Pre-condition | Người dùng được phân quyền, tồn tại một Code phí định kỳ và lệnh thực thi tương ứng trong hệ thống |
| Post-condition | Thêm mới thành công job sinh thông tin phí định kỳ |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Thêm mới" |
| 2 | Hệ thống | Hiển thị màn hình Thêm mới job |
| 3 | Người dùng | Nhập các thông tin cấu hình job → "Xác nhận" |
| 4 | Hệ thống | Kiểm tra tính hợp lệ → Lưu thành công |
| 5 | Người dùng | Nhận thông báo "Thêm mới job thành công" |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Nhập đầy đủ các trường bắt buộc (*) trước khi chọn "Xác nhận" |
| BR_02 | Chọn "Đóng" → không lưu |
| BR_03 | Mã số job / Thứ tự chạy job / Code phí phải duy nhất |
| BR_04 | Bắt buộc nhập Số lần truy thu tối đa nếu chọn có Truy thu |
| BR_05 | Bắt buộc chọn Thu vào số dư tối thiểu hoặc Thu từ TK của khách hàng nếu chọn có Tận thu |

## Màn hình tham khảo

> [Tham khảo URD trang 68–70 cho screenshots]
