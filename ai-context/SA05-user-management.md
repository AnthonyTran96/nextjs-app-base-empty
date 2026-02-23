# SA.05 — Quản lý người dùng

## Mô tả chung

- **Mục đích**: Cho phép quản lý các người dùng trong hệ thống và phân quyền sử dụng các chức năng trên hệ thống cho từng người dùng.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Thêm mới | Cho phép thêm mới người dùng |
| 2 | Sửa | Cho phép sửa bản ghi |
| 3 | Xóa | Cho phép xóa bản ghi |
| 4 | Xem | Cho phép xem thông tin chi tiết tài khoản người dùng |
| 5 | Reset mật khẩu | Cho phép người dùng (Quản trị) reset mật khẩu của một tài khoản bất kỳ |
| 6 | Mở khóa | Cho phép cập nhật trạng thái người dùng từ "Bị khóa TK" thành "Đang hoạt động" |
| 7 | Tìm kiếm | Cho phép tìm kiếm dữ liệu trên lưới |
| 8 | Tải xuống | Cho phép kết xuất dữ liệu ra tệp |

---

## Thêm mới Người dùng

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Thêm mới người dùng vào hệ thống |
| Actor | Người dùng |
| Trigger | Click vào nút "Thêm mới" trên màn hình Quản lý người dùng |
| Pre-condition | Người dùng được phân quyền |
| Post-condition | Tạo mới người dùng thành công |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Thêm mới" trên màn hình Quản lý người dùng |
| 2 | Hệ thống | Hiển thị màn hình Thêm mới Người dùng |
| 3 | Người dùng | Nhập thông tin người dùng mới |
| 4 | Hệ thống | Kiểm tra tính hợp lệ → Lưu thành công |
| 5 | Người dùng | Nhận thông báo Tạo mới Người dùng thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Các trạng thái tài khoản: Bị khóa, Đang hoạt động, Ngừng hoạt động |
| BR_02 | Khi tạo tài khoản, trạng thái mặc định là "Đang hoạt động" |
| BR_03 | Tài khoản chuyển từ "Đang hoạt động" sang "Bị khóa" khi đăng nhập sai quá 5 lần |
| BR_04 | Có thể chuyển trạng thái "Đang hoạt động" ↔ "Ngừng hoạt động" mà mật khẩu không thay đổi |
| BR_05 | Có thể chuyển trạng thái "Bị khóa" → "Đang hoạt động" và mật khẩu sẽ được reset (tham chiếu SA.03) |

---

## Reset mật khẩu

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Reset mật khẩu cho một user |
| Actor | Người dùng |
| Trigger | Click vào nút "Reset mật khẩu" tại bản ghi user cần reset trên lưới |
| Pre-condition | Người dùng được phân quyền |
| Post-condition | Hệ thống sinh mật khẩu ngẫu nhiên và gửi thông tin mật khẩu mới về email của user |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn "Reset mật khẩu" tại bản ghi user cần reset |
| 2 | Hệ thống | Hiển thị màn hình Xác nhận |
| 3 | Người dùng | Chọn "Xác nhận" |
| 4 | Hệ thống | Reset mật khẩu → Gửi mật khẩu mới về email gắn với user |
| 5 | Người dùng | Nhận thông báo "Reset thành công" |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Hệ thống sinh mật khẩu ngẫu nhiên theo quy tắc thiết lập tại SA.04 |
| BR_02 | Khi reset thành công, gửi mật khẩu mới về email đăng ký tài khoản |
| BR_03 | Lần đăng nhập đầu tiên sau reset, bắt buộc đổi mật khẩu (tham chiếu SA.03) |

---

## Mở khóa

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Mở khóa cho một user đang ở trạng thái bị khóa |
| Actor | Người dùng |
| Trigger | Click vào nút "Mở khóa" tại bản ghi user cần mở khóa trên lưới |
| Pre-condition | Người dùng được phân quyền, bản ghi user đang ở trạng thái bị khóa |
| Post-condition | Hệ thống sinh mật khẩu ngẫu nhiên và gửi thông tin mật khẩu mới về email của user |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn "Mở khóa" tại bản ghi user cần mở khóa |
| 2 | Hệ thống | Hiển thị màn hình xác nhận |
| 3 | Người dùng | Chọn "Xác nhận" |
| 4 | Hệ thống | Thay đổi trạng thái "Bị khóa" → "Đang hoạt động". Reset mật khẩu. Gửi mật khẩu mới về email |
| 5 | Người dùng | Nhận thông báo "Reset thành công" |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Sinh mật khẩu ngẫu nhiên theo quy tắc tại SA.04 |
| BR_02 | Gửi mật khẩu mới về email đăng ký tài khoản |
| BR_03 | Lần đăng nhập đầu tiên sau reset, bắt buộc đổi mật khẩu (tham chiếu SA.03) |
| BR_04 | Thay đổi trạng thái tài khoản từ "Bị khóa" sang "Đang hoạt động" |

## Màn hình tham khảo

> [Tham khảo URD trang 55–59 cho screenshots]
