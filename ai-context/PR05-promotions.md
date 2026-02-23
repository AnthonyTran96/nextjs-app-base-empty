# PR.05 — Chương trình ưu đãi

## Mô tả chung

- **Mục đích**: Cho phép người dùng thiết lập và quản lý các chương trình ưu đãi (CTƯĐ). Mỗi CTƯĐ áp dụng với 1 Biểu phí, người dùng có thể thiết lập mức miễn giảm phí cụ thể cho từng Code phí trực thuộc biểu phí đó.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Thêm mới | Cho phép thêm mới bản ghi |
| 2 | Thiết lập ưu đãi lũy tiến | Thiết lập nguyên tắc tính ưu đãi của từng Code phí theo biểu bậc thang |
| 3 | Thêm mới KH | Khai báo Khách hàng cụ thể được áp dụng CTƯĐ, cho phép khai báo hiệu lực áp dụng (được phép vượt khỏi hiệu lực CTƯĐ) |
| 4 | Tải lên | Import danh sách khách hàng được áp dụng CTƯĐ |
| 5 | Kiểm tra | Kiểm tra dữ liệu danh sách KH được tải lên |
| 6 | Xem | Cho phép xem bản ghi |
| 7 | Sửa | Cho phép sửa bản ghi |
| 8 | Xóa | Cho phép xóa bản ghi |
| 9 | Tìm kiếm | Cho phép tìm kiếm dữ liệu trên lưới |
| 10 | Tải xuống | Cho phép tải xuống dữ liệu trên lưới ra file |

---

## Thêm mới Chương trình ưu đãi

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Thêm mới một chương trình ưu đãi |
| Actor | Maker |
| Trigger | Chọn nút "Thêm mới" trên màn hình Chương trình ưu đãi |
| Pre-condition | Đăng nhập với vai trò Maker. Tồn tại ít nhất một Code phí đã khai báo thành công |
| Post-condition | Tạo thành công CTƯĐ. Hiển thị tác vụ Thêm mới tại "Tác vụ chờ duyệt" |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Thêm mới" trên lưới "Chương trình ưu đãi" |
| 2 | Hệ thống | Hiển thị màn hình nhập thông tin CTƯĐ |
| 3 | Người dùng | Nhập thông tin chung → Thêm mới Điều kiện tính phí |
| 4 | | Chọn tệp tải lên DS khách hàng → nhấn "Kiểm tra" (nếu có DS KH cụ thể) |
| 5 | | Khai báo các code phí được ưu đãi và quy tắc ưu đãi |
| 6 | Hệ thống | Kiểm tra hợp lệ → Lưu thành công → Hiển thị tác vụ tại Tác vụ chờ duyệt |
| 7 | Người dùng | Nhận thông báo thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Cho phép một KH thuộc nhiều nhóm KH và nhiều CTƯĐ; hệ thống xác định mức phí dựa trên mức ưu đãi tối ưu nhất |
| BR_01b | Nhập đầy đủ trường bắt buộc (*) |
| BR_02 | Chọn "Đóng" → không lưu |
| BR_03 | Tên CTƯĐ và mã CTƯĐ phải duy nhất |
| BR_04 | Trường "Loại ưu đãi" chỉ hiển thị 2 loại: **Theo giao dịch** (điều kiện theo KH + Giao dịch) và **Định kỳ** (điều kiện theo KH + Tài khoản + Thẻ) |
| BR_05 | Tab Phí được ưu đãi: chỉ cho phép chọn Code phí thuộc Biểu phí đã khai báo và có phân loại tương ứng (Theo giao dịch/Định kỳ) |
| BR_06 | Điều kiện tính ưu đãi: tương tự chức năng Thêm mới Code phí dành cho KHCN |
| BR_07 | Khi nhấn "Kiểm tra" DS KH, hệ thống validate KH có thỏa mãn điều kiện áp dụng ưu đãi; nếu không → báo lỗi từng KH |
| BR_08 | Bản ghi chưa phê duyệt không hiển thị trên lưới "Chương trình ưu đãi" |
| BR_09 | Bản ghi tạo thành công có trạng thái "Chờ duyệt" |
| BR_10 | "Ngày tạo" hệ thống tự sinh theo YYYY-MM-DD HH:MM:SS |
| BR_11 | "Người tạo" hiển thị username |

## Màn hình tham khảo

- Tab Đối tượng áp dụng
- Tab Phí được ưu đãi

> [Tham khảo URD trang 31–35 cho screenshots]
