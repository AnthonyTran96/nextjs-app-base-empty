# SA.08 — Quản lý tham số mặc định

## Mô tả chung

- **Mục đích**: Cho phép người dùng khai báo giá trị áp dụng của các tham số cấu hình mặc định cho hệ thống. Danh sách và ý nghĩa của các tham số được giải thích tại Phụ lục.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Sửa | Cho phép sửa bản ghi |
| 2 | Xem | Cho phép xem bản ghi |

## Danh sách tham số cấu hình hệ thống

| STT | Tham số | Mô tả |
|-----|---------|-------|
| 1 | SESSION_TIMEOUT | Khoảng thời gian hệ thống tự động đăng xuất nếu người dùng không có thao tác |
| 2 | NUM_DAY_BG | Số ngày nhắc trước khi đến hạn thu phí bảo lãnh định kỳ |
| 3 | NUM_DAY_PROMO | Số ngày nhắc trước khi hết hiệu lực chương trình ưu đãi |
| 4 | EMAIL_ALERT | Email nhận báo lỗi chạy job |
| 5 | EX_RATE_PERIOD | Khoảng thời gian |
| 6 | NUM_DAY_HIS | Khoảng thời gian đẩy dữ liệu sang bảng hist. Dữ liệu đã đẩy sang bảng hist chỉ tra cứu được thông qua báo cáo |
| 7 | NUM_DUE_RETAIN | Số lượng kỳ nợ phí tối đa. Cuối ngày, hệ thống kiểm tra các bản ghi phí định kỳ chưa thu thành công và đếm số lượng kỳ nợ phí, nếu vượt quá thì xóa các bản ghi theo thời gian từ xa nhất đến gần |
| 8 | RETRY_PERIOD | Khoảng thời gian job chạy thu phí trên T24 quét lại các bản ghi thu phí có trạng thái khác "Thanh toán toàn bộ" |

## Sửa Tham số mặc định

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Cập nhật tham số mặc định |
| Actor | Người dùng |
| Trigger | Click vào nút "Sửa" tại bản ghi tham số cần sửa trên lưới |
| Pre-condition | Người dùng được phân quyền |
| Post-condition | Bản ghi tham số mặc định được cập nhật, hệ thống xử lý theo thông tin cập nhật gần nhất |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Sửa" trên lưới |
| 2 | Hệ thống | Hiển thị màn hình Sửa |
| 3 | Người dùng | Sửa các thông tin |
| 4 | Hệ thống | Kiểm tra tính hợp lệ → Lưu thành công |
| 5 | Người dùng | Nhận thông báo "Sửa tham số mặc định thành công" |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Nhập đầy đủ các trường bắt buộc (*) trước khi chọn "Xác nhận" |
| BR_02 | Chọn "Đóng" → không lưu |
| BR_03 | Các tham số mặc định bao gồm: Thời gian time-out (SESSION_TIMEOUT), Số lần tối đa đăng nhập sai |

## Màn hình tham khảo

> [Tham khảo URD trang 66–67 cho screenshots]
