# PR.01 — Danh mục sản phẩm dịch vụ và code phí

## Mô tả chung

- **Mục đích**: Cho phép người dùng thiết lập và quản lý danh mục các loại giao dịch có thu phí theo từng sản phẩm, dịch vụ của ngân hàng theo tổ chức phân cấp.
- SPDV cấp 1 = Nghiệp vụ ngân hàng; SPDV cấp 6 = cấp chi tiết nhất, được gắn các Code phí.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Tạo mới | Tạo mới, xem, chỉnh sửa thông tin SPDV |
| 2 | Kết xuất/tra cứu | Cho phép kết xuất/tra cứu dữ liệu trên lưới chức năng |
| 3 | Duyệt | Cơ chế cho phép người dùng có vai trò duyệt thực hiện duyệt thông tin |

## Yêu cầu chi tiết

### PR.01.1 — Thiết lập danh mục SPDV phân cấp `[M]`

Cho phép người dùng thiết lập và quản lý danh mục các loại giao dịch có thu phí theo từng sản phẩm, dịch vụ của ngân hàng theo tổ chức phân cấp.

### PR.01.2 — Quy tắc phân cấp SPDV

Hệ thống cho phép nhập tối đa **6 cấp SPDV**:
- Bắt buộc khai báo đầy đủ các cấp cha từ 1–5, không cho phép bỏ trống cấp nào trước khi khai báo cấp 6.
- Khi đánh dấu SPDV là "Cấp cuối cùng trong cây sơ đồ sản phẩm" mà chưa khai báo đầy đủ các cấp từ 1–5, hệ thống cảnh báo lỗi và không cho phép lưu.

### PR.01.3 — CRUD SPDV `[M]`

Hệ thống cho phép người dùng:
- Tạo mới, xem, chỉnh sửa thông tin Sản phẩm dịch vụ
- Cho phép kết xuất/tra cứu dữ liệu trên lưới chức năng

### PR.01.4 — Cơ chế duyệt `[M]`

Có cơ chế cho phép người dùng có vai trò duyệt thực hiện duyệt thông tin sau khi dữ liệu được tạo mới/chỉnh sửa.

### PR.01.7 — Thêm mới Code phí `[M]`

Cho phép thêm mới một/nhiều code phí trực thuộc SPDV cấp 6. Hệ thống cho phép thiết lập Code phí thuộc một trong 2 hình thức:
- **Theo giao dịch**: Thu ngay khi có biến động
- **Định kỳ**: Thu theo tần suất được người dùng định nghĩa

### PR.01.8 — Code phí dành cho KHCN `[M]`

- **Phí Theo giao dịch**: Cho phép thiết lập Loại công thức tính phí, Điều kiện tính phí theo Giao dịch và Điều kiện tính phí theo phân khúc khách hàng.
- **Phí Định kỳ**: Cho phép thiết lập Loại công thức tính phí, Điều kiện tính phí theo Tài khoản/Thẻ và Điều kiện tính phí theo phân khúc khách hàng.

### PR.01.9 — Code phí dành cho KHDN `[M]`

- **Phí Theo giao dịch**: Cho phép thiết lập Loại công thức tính phí, Điều kiện tính phí theo Giao dịch và mức phí áp dụng chung hay áp dụng cho một mã CIF nhất định.
- **Phí Định kỳ**: Cho phép thiết lập Loại công thức tính phí, Điều kiện tính phí theo Tài khoản/Thẻ và mức phí áp dụng chung hay áp dụng cho một mã CIF nhất định.

### PR.01.10 — Thiết lập tiền tệ và min/max `[M]`

Với mỗi Code phí, cho phép thiết lập:
- Loại tiền của biểu phí
- Số tiền tối thiểu/tối đa
- Loại tiền của Số tiền tối thiểu/tối đa

Khi so sánh Số tiền phí với Số tiền tối thiểu/tối đa, Số tiền tối thiểu/tối đa phải được quy đổi ra Loại tiền của Code phí. Tỷ giá quy đổi là tỷ giá được xác định tại thời điểm thực hiện giao dịch.

## Màn hình tham khảo

- Lưới chức năng (danh sách SPDV)
- Thêm mới SPDV cấp 1
- Thêm mới SPDV chi tiết
- Khai báo Code phí (nhiều loại công thức: Số cố định, Tỷ lệ × Giá trị, Đơn giá × Số lượng)

> [Tham khảo URD trang 13–17 cho screenshots]
