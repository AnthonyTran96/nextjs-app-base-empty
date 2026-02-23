# ProfiX — Hệ thống Quản lý phí tập trung (Phase 1)

> **Nguồn**: URD_ProfiX Phase 1 ver 0.6.1 — PVcomBank × HTC Holdings  
> **Ngày**: 03/02/2026

---

## I. Mục đích

- Mô tả các yêu cầu về hệ thống Quản lý phí tập trung của PVcomBank.
- Làm đầu vào cho quá trình thiết kế, lập trình, system test.
- Xây dựng dựa trên hợp đồng và yêu cầu của PVcomBank.

## II. Phạm vi

- **Tên sản phẩm**: Hệ thống quản lý phí tập trung (ProfiX)
- Cho phép nhập và quản lý các tham số tính phí cũng như quản lý việc thu phí dịch vụ của ngân hàng.
- Tài liệu này thống nhất tất cả yêu cầu và là cơ sở nghiệm thu dự án.

## III. Từ viết tắt

| STT | Viết tắt | Giải thích |
|-----|----------|------------|
| 1 | KH | Khách hàng |
| 2 | KHCN | Khách hàng cá nhân |
| 3 | KHDN | Khách hàng doanh nghiệp |
| 4 | SPDV | Sản phẩm dịch vụ |
| 5 | CTƯĐ | Chương trình ưu đãi |
| 6 | NSD | Người sử dụng |
| 7 | CIF | Mã khách hàng (Customer Information File) |
| 8 | ESB | Trục tích hợp (Enterprise Service Bus) |
| 9 | BRD | Tài liệu yêu cầu nghiệp vụ |
| 10 | URD | Tài liệu mô tả yêu cầu người dùng |

## IV. Tổng quan hệ thống

Hệ thống cho phép nhóm người dùng là cán bộ nhân viên ngân hàng:

- Quản trị tập trung, đồng bộ dữ liệu phí trên một hệ thống duy nhất.
- Quản lý đầy đủ vòng đời Phí/Biểu phí/CTƯĐ phí (tạo – duyệt – theo dõi – điều chỉnh – hủy).
- Thiết lập linh hoạt mức phí, phương thức tính phí theo đối tượng khách hàng, sản phẩm, phân khúc, kênh bán.
- Đồng bộ biểu phí giữa các kênh giao dịch & hệ thống tính phí thực tế.
- Hỗ trợ các hoạt động vận hành phí, tính toán phí tự động, tra cứu đối với tất cả các giao dịch.
- Hỗ trợ thực hiện công tác truy thu, tận thu phí.
- Cung cấp báo cáo, dashboard và công cụ giả lập để kiểm soát hiệu quả thu phí.
- Chuẩn hóa các báo cáo phục vụ công tác quản lý và điều hành Phí.

## V. Danh sách chức năng

### I. PR — Khai báo tham số

| STT | Mã | Tên chức năng |
|-----|----|---------------|
| 1 | PR.01 | Danh mục sản phẩm dịch vụ và code phí |
| 2 | PR.02 | Công thức tính phí |
| 3 | PR.03 | Danh mục biểu phí |
| 4 | PR.04 | Danh sách Code phí chưa sử dụng |
| 5 | PR.05 | Chương trình ưu đãi |

### II. SE — Tra cứu

| STT | Mã | Tên chức năng |
|-----|----|---------------|
| 1 | SE.01 | Xem nghiệp vụ theo cây thư mục |
| 2 | SE.02 | Xem biểu phí theo Khách hàng |
| 3 | SE.03 | Xem lịch sử thu phí theo Khách hàng |
| 4 | SE.04 | Xem lịch thu phí định kỳ dự kiến theo Khách hàng |

### III. OT — Chức năng khác

| STT | Mã | Tên chức năng |
|-----|----|---------------|
| 1 | OT.01 | Tác vụ chờ duyệt |
| 2 | OT.02 | Tác vụ pending của tôi |

### IV. SA — Quản trị hệ thống

| STT | Mã | Tên chức năng |
|-----|----|---------------|
| 1 | SA.01 | Đăng nhập |
| 2 | SA.02 | Đăng xuất |
| 3 | SA.03 | Đổi mật khẩu |
| 4 | SA.04 | Cấu hình chính sách mật khẩu |
| 5 | SA.05 | Quản lý người dùng |
| 6 | SA.06 | Quản lý phân quyền |
| 7 | SA.07 | Danh mục điều kiện tính phí |
| 8 | SA.08 | Quản lý tham số mặc định |
| 9 | SA.09 | Quản lý danh sách job |
| 10 | SA.10 | Quản lý job trong ngày |
| 11 | SA.11 | Tra cứu lịch sử hoạt động job hàng ngày |

## VI. Nhóm người dùng hệ thống

| STT | Người dùng | Vai trò |
|-----|------------|---------|
| 1 | Nghiệp vụ (Maker, Checker) | Thực hiện thiết lập danh mục sản phẩm, biểu phí và chương trình ưu đãi trên hệ thống |
| 2 | Quản trị hệ thống | Thực hiện quản trị người dùng và các kết nối với hệ thống khác |

## VII. Quy trình nghiệp vụ

### VII.1. Quy trình quản trị hệ thống phí tập trung

> [Sơ đồ quy trình quản trị — tham khảo URD trang 5]

### VII.2. Quy trình vận hành hệ thống phí tập trung

#### VII.2.1. Quy trình tổng thể nghiệp vụ thu phí theo giao dịch

Quy trình được kích hoạt khi các hệ thống giao dịch với khách hàng phát sinh giao dịch thu phí (ví dụ: giao dịch chuyển tiền, giao dịch bán séc, giao dịch trả nợ trước hạn…).

> [Sơ đồ quy trình — tham khảo URD trang 5–6]

#### VII.2.2. Quy trình tổng thể nghiệp vụ thu phí định kỳ

Quy trình được kích hoạt khi hệ thống cần xử lý tự động một nghiệp vụ thu phí định kỳ (ví dụ: thu phí quản lý tài khoản, phí thường niên thẻ…).

> [Sơ đồ quy trình — tham khảo URD trang 6]

## VIII. Tài liệu liên quan

| STT | Tên tài liệu |
|-----|---------------|
| 1 | Tài liệu yêu cầu nghiệp vụ (BRD) xây dựng hệ thống Phần mềm Quản lý phí tập trung |
| 2 | Tài liệu mô tả yêu cầu người dùng (URD) xây dựng hệ thống Phần mềm Quản lý phí tập trung ProfiX – Yêu cầu thay đổi các hệ thống bên ngoài |
