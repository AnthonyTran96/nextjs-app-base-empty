# PR.02 — Công thức tính phí

## Mô tả chung

- **Mục đích**: Cho phép người dùng thiết lập các công thức tính phí cụ thể và gắn công thức vào các code phí cần sử dụng.

### Phương pháp tính phí

Hệ thống hỗ trợ **03 phương pháp** tính phí:

1. **Số cố định**
2. **Theo tỷ lệ × Giá trị tính phí** (Giá trị tính phí có thể là Số tiền giao dịch, Giá trị bảo lãnh, Giá trị LC, Số tiền trả nợ trước hạn… tùy theo thông tin của từng giao dịch)
3. **Theo đơn giá × Số lượng tính phí** (Số lượng tính phí có thể là Số lượng séc, Số lượng bản sao kê tài khoản, Số lượng bảo sao hồ sơ TSBĐ…)

Hệ thống hỗ trợ thiết lập các loại công thức khác nhau bằng cách **kết hợp** các phương pháp trên.

**Ví dụ**: Phí chuyển tiền nước ngoài loại tiền CAD = 30 USD + 0,2% số tiền chuyển:
- Cấu phần 1 = Số cố định 30 USD
- Cấu phần 2 = (Tỷ lệ 0,2%) × (Giá trị tính phí = Số tiền chuyển quy đổi ra USD)

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Thêm mới | Cho phép thêm mới bản ghi công thức tính phí |
| 2 | Xem | Cho phép xem bản ghi |
| 3 | Sửa | Cho phép sửa bản ghi |
| 4 | Tìm kiếm | Cho phép tìm kiếm dữ liệu trên lưới |
| 5 | Tải xuống | Cho phép tải xuống dữ liệu trên lưới ra file |

## Thêm mới công thức tính phí

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Thêm mới công thức tính phí |
| Actor | Người dùng được phân quyền |
| Trigger | Người dùng chọn nút "Thêm mới" trên lưới của chức năng "Công thức tính phí" |
| Pre-condition | Người dùng đăng nhập vào hệ thống với vai trò Maker |
| Post-condition | Tạo thành công bộ công thức tính phí. Hiển thị tác vụ Thêm mới tại màn hình "Tác vụ chờ duyệt" |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Thêm mới" trên lưới của chức năng "Công thức tính phí" |
| 2 | Hệ thống | Hiển thị màn hình cho phép nhập thông tin các Công thức tính phí |
| 3 | Người dùng | Nhập thông tin chung của Công thức tính phí, chọn phương pháp tính cho mỗi cấu phần |
| 4 | | Chọn "Xác nhận" |
| 5 | Người dùng | Nhập các Quy tắc tính phí và chọn Xác nhận |
| 6 | Hệ thống | Kiểm tra tính hợp lệ → Lưu thành công → Hiển thị tác vụ thêm mới tại Tác vụ chờ duyệt |
| 7 | Người dùng | Nhận thông báo thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Người dùng cần nhập đầy đủ các trường bắt buộc (dấu *) trước khi chọn "Xác nhận" |
| BR_02 | Người dùng chọn "Đóng", hệ thống sẽ không lưu các thông tin vừa nhập |
| BR_03 | Tên Công thức và mã Công thức phải là duy nhất, không được trùng với bản ghi đã tồn tại |
| BR_04 | 1 Công thức tính phí có thể được tạo thành từ 1 hoặc nhiều cấu phần khác nhau. Các cấu phần được liên kết bằng toán tử "+" |
| BR_05 | Tại các cấu phần, hiển thị danh sách các công thức có sẵn cho phép người dùng lựa chọn |
| BR_06 | Bản ghi tạo thành công chưa được phê duyệt không hiển thị trên lưới "Công thức tính phí" |
| BR_07 | Bản ghi tạo thành công có trạng thái "Chờ duyệt" và hiển thị tại "Tác vụ chờ duyệt" |
| BR_08 | Trường "Ngày tạo" là thời gian thực tế tạo bản ghi, hệ thống tự sinh theo định dạng YYYY-MM-DD HH:MM:SS |
| BR_09 | Trường "Người tạo" hiển thị username của Người khởi tạo bản ghi |

## Màn hình tham khảo

> [Tham khảo URD trang 18–20 cho screenshots]
