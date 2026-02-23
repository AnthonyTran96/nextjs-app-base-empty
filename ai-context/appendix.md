# Phụ lục — ProfiX Phase 1

## II.6.1. Các chức năng xử lý tự động

### II.6.1.1. Gửi email cảnh báo đến hạn thu phí bảo lãnh

- **Thời điểm chạy**: Đầu ngày
- **Mô tả**: Hệ thống quét danh sách bản ghi thu phí bảo lãnh định kỳ có trạng thái chưa thanh toán và `Kỳ thu phí – Ngày hiện tại <= NUM_DAY_BG` để gửi email thông báo đến CBNV đầu mối.
- **Template email**:
  - Tiêu đề: "Đến hạn thu phí bảo lãnh định kỳ"
  - Nội dung: Số bảo lãnh, Tên KH, Mã KH, Ngày đến hạn, Loại tiền, Số tiền phí

### II.6.1.2. Gửi email cảnh báo hết hiệu lực chương trình ưu đãi

- **Thời điểm chạy**: Đầu ngày
- **Mô tả**: Hệ thống quét danh sách CTƯĐ đang còn hiệu lực và `Ngày hết hiệu lực – Ngày hiện tại <= NUM_DAY_PROMO` để gửi email thông báo.
- **Template email**:
  - Tiêu đề: "Hết hiệu lực chương trình ưu đãi"
  - Nội dung: Mã CTƯĐ, Tên CTƯĐ, Ngày hiệu lực, Ngày hết hiệu lực

### II.6.1.3. Gửi email nhắc người dùng trước khi hết hạn mật khẩu

- **Thời điểm chạy**: Đầu ngày
- **Mô tả**: Hệ thống quét danh sách user còn n ngày trước khi hết hạn mật khẩu (n = "Ngày thông báo hết hạn" tại SA.04) → gửi mail.
- **Template email**:
  - Tiêu đề: "Hết hiệu lực mật khẩu đăng nhập ProfiX"
  - Nội dung: Mật khẩu sẽ hết hạn sau [n] ngày, vui lòng đổi mật khẩu

### II.6.1.4. Gửi email mật khẩu khi tạo mới user

- **Thời điểm chạy**: Sau khi tạo mới user (SA.05) thành công
- **Mô tả**: Hệ thống tự động gửi mail về email của người dùng.
- **Template email**:
  - Tiêu đề: "Tài khoản đăng nhập ProfiX"
  - Nội dung: Tên đăng nhập, Mật khẩu, yêu cầu đổi mật khẩu

### II.6.1.5. Gửi email mật khẩu khi reset mật khẩu

- **Thời điểm chạy**: Sau khi reset mật khẩu cho user (SA.05) thành công
- **Mô tả**: Hệ thống tự động gửi mail về email của người dùng.
- **Template email**:
  - Tiêu đề: "Tài khoản đăng nhập ProfiX"
  - Nội dung: Tên đăng nhập, Mật khẩu mới, yêu cầu đổi mật khẩu

### II.6.1.6. Gửi email thông báo khi job chạy lỗi

- **Thời điểm chạy**: Job chạy lỗi (tự động hoặc thủ công)
- **Mô tả**: Hệ thống gửi thông tin lỗi về email quản trị (EMAIL_ALERT).
- **Template email**:
  - Tiêu đề: "Thông báo từ hệ thống ProfiX"
  - Nội dung: Tên tiến trình, Thời gian xảy ra lỗi, Nội dung lỗi

### II.6.1.7. Gửi thông tin thu phí định kỳ sang T24

- **Thời điểm chạy**: Đầu ngày
- **Mô tả**: ProfiX sinh dữ liệu phí thu định kỳ theo tham số đã cấu hình, lọc và gửi dữ liệu phí cần thu cho T24.
- **Dữ liệu phí cần thu tại ngày T bao gồm**:
  - Phí định kỳ đến hạn thu vào ngày T
  - Phí định kỳ đến hạn thu vào ngày < T, Trạng thái thanh toán ≠ "Thanh toán toàn bộ", Retry = Y và Số lần retry ≤ Số lần retry tối đa
- **Mỗi bản ghi dữ liệu phí cần thu có**:
  - Thông tin đối tượng bị thu phí: CIF, Số tài khoản, Số thẻ, Số tài khoản thu phí
  - Thông tin kỳ thu phí: Code phí, Ngày đến hạn, Loại tiền, Số tiền phí, VAT, Số tiền phí chưa thu, VAT chưa thu, Trạng thái thanh toán
  - Quy tắc truy thu, tận thu: Retry (Y/N), Số lần retry tối đa, Thu vào số dư tối thiểu (Y/N), Thu từ TK khác của KH (Y/N)

### II.6.1.8. Sinh dữ liệu thu phí bảo lãnh định kỳ kỳ tiếp theo

- **Thời điểm chạy**: Cuối ngày
- **Mô tả**: Tại ngày T, hệ thống kiểm tra bản ghi lịch thu phí bảo lãnh định kỳ có kỳ thu phí tiếp theo = T+1, sinh thêm 1 bản ghi với:
  - Kỳ thu phí: ngày T+1
  - Số tiền thu phí: tự động tính theo công thức tại Code phí
  - Số tiền thanh toán: null
  - Kỳ hạn: bằng kỳ hạn bản ghi liền trước
  - Kỳ tiếp theo: ngày (T+1) + kỳ hạn

---

## II.6.2. Danh sách tham số cấu hình hệ thống

| STT | Tham số | Mô tả |
|-----|---------|-------|
| 1 | SESSION_TIMEOUT | Khoảng thời gian tự động đăng xuất nếu không có thao tác |
| 2 | NUM_DAY_BG | Số ngày nhắc trước khi đến hạn thu phí bảo lãnh định kỳ |
| 3 | NUM_DAY_PROMO | Số ngày nhắc trước khi hết hiệu lực CTƯĐ |
| 4 | EMAIL_ALERT | Email nhận báo lỗi chạy job |
| 5 | EX_RATE_PERIOD | Khoảng thời gian |
| 6 | NUM_DAY_HIS | Khoảng thời gian đẩy dữ liệu sang bảng hist |
| 7 | NUM_DUE_RETAIN | Số lượng kỳ nợ phí tối đa. Tiêu chí cùng bộ thông tin nguồn: Phí theo KH (cùng Code phí + CIF), Phí theo TK (cùng Code phí + Số TK), Phí theo Thẻ (cùng Code phí + Số thẻ) |
| 8 | RETRY_PERIOD | Khoảng thời gian job chạy thu phí trên T24 quét lại các bản ghi chưa thanh toán toàn bộ |

---

## II.6.3. Các ví dụ về khai báo Code phí

### II.6.3.1. Code phí dùng công thức "Số cố định" — Phí thu theo giao dịch

> [Tham khảo URD trang 80–82 cho biểu phí ban hành và màn hình khai báo]

### II.6.3.2. Code phí dùng công thức "Số cố định" — Phí thu định kỳ

> [Tham khảo URD trang 82–83 cho biểu phí ban hành và màn hình khai báo]

### II.6.3.3. Code phí dùng công thức "Tỷ lệ × Giá trị tính phí"

> [Tham khảo URD trang 83–85 cho biểu phí ban hành và màn hình khai báo]

### II.6.3.4. Code phí dùng công thức "Đơn giá × Số lượng tính phí"

> [Tham khảo URD trang 85–87 cho biểu phí ban hành và màn hình khai báo]

### II.6.3.5. Code phí dùng công thức "Số cố định + Tỷ lệ × Giá trị tính phí"

> [Tham khảo URD trang 87–89 cho biểu phí ban hành và màn hình khai báo]

### II.6.3.6. Code phí dùng công thức "Tỷ lệ 1 × Giá trị tính phí 1 + Tỷ lệ 2 × Giá trị tính phí 2"

> [Tham khảo URD trang 89–91 cho biểu phí ban hành và màn hình khai báo]

---

## II.6.4. Nguyên tắc phân quyền dữ liệu tra cứu

Đối với các màn hình tra cứu cần phân quyền dữ liệu, điều kiện tìm kiếm sẽ bao gồm trường **Khối**:

- Nếu người dùng thuộc **Khối KHCN** hoặc **KHDN**: Hệ thống hiển thị Khối của user và **không cho phép sửa**.
- Nếu người dùng **không thuộc** Khối KHCN và KHDN: Hệ thống hiển thị các giá trị cho phép lựa chọn: (1) Tất cả, (2) KHCN, (3) KHDN.

Hệ thống dựa trên giá trị "Khối" tại điều kiện tìm kiếm để trả về kết quả bao gồm các code phí/giao dịch của KHCN/KHDN tương ứng.

> **Lưu ý**: KHDN bao gồm cả Khách hàng doanh nghiệp lớn và Khách hàng doanh nghiệp vừa và nhỏ.
