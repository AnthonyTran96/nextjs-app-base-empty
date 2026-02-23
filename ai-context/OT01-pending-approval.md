# OT.01 — Tác vụ chờ duyệt

## Mô tả chung

- **Mục đích**: Tập hợp các tác vụ đang chờ duyệt, cho phép người dùng xem, duyệt/từ chối duyệt tác vụ.
- NSD mặc định nhìn thấy các bản ghi có trạng thái "Chờ duyệt" đang cần mình phê duyệt và có thể tìm kiếm tất cả bản ghi bao gồm "Chờ duyệt", "Duyệt", "Từ chối duyệt".

### Nguyên tắc tạo tác vụ chờ duyệt

Tại một thời điểm, một mã định danh chỉ có thể có **1 yêu cầu đang chờ duyệt**, không phân biệt hành động "Tạo mới/Sửa/Xóa". Nếu mã định danh đang có yêu cầu sửa/xóa chờ duyệt mà NSD thực hiện sửa/xóa tiếp → hệ thống báo lỗi.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Xem | Cho phép xem tác vụ chờ duyệt/từ chối duyệt |
| 2 | Duyệt | Cho phép duyệt tác vụ chờ duyệt |
| 3 | Từ chối duyệt | Cho phép từ chối duyệt tác vụ chờ duyệt |
| 4 | Lọc | Cho phép tìm kiếm dữ liệu trên lưới |
| 5 | Tải xuống | Cho phép tải xuống dữ liệu trên lưới ra file |

---

## Duyệt

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Duyệt một tác vụ đang ở trạng thái "Chờ duyệt" |
| Actor | Người dùng được phân quyền |
| Trigger | Chọn nút "Duyệt" trên màn hình tại bản ghi Tác vụ cần duyệt |
| Pre-condition | Đăng nhập với vai trò Checker |
| Post-condition | Duyệt thành công. Trạng thái = Đã duyệt. Nếu Thêm mới → thêm bản ghi; Nếu Sửa → cập nhật; Nếu Xóa → xóa bản ghi |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Duyệt" |
| 2 | Hệ thống | Hiển thị màn hình xác nhận |
| 3 | Người dùng | Chọn "Xác nhận" |
| 4 | Hệ thống | Kiểm tra hợp lệ → Lưu thành công → Cập nhật trạng thái = Đã duyệt |
| 5 | Người dùng | Nhận thông báo "Duyệt thành công" |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | NSD mặc định nhìn thấy bản ghi "Chờ duyệt" cần mình phê duyệt; có thể tìm kiếm tất cả trạng thái |
| BR_02 | Tại một thời điểm, một mã định danh chỉ có 1 yêu cầu chờ duyệt |
| BR_03 | Nếu trạng thái tác vụ khác "Chờ duyệt" khi nhấn "Xác nhận" → báo lỗi "Trạng thái duyệt không hợp lệ" |
| BR_04 | Duyệt thành công: Thêm mới → hiển thị bản ghi; Sửa → cập nhật; Xóa → không hiển thị |
| BR_05 | "Ngày duyệt" hệ thống tự sinh theo YYYY-MM-DD HH:MM:SS |
| BR_06 | "Người duyệt" hiển thị username |

---

## Từ chối duyệt

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Từ chối duyệt một tác vụ đang ở trạng thái "Chờ duyệt" |
| Actor | Người dùng được phân quyền |
| Trigger | Chọn nút "Từ chối duyệt" |
| Pre-condition | Đăng nhập với vai trò Checker |
| Post-condition | Từ chối thành công. Trạng thái = Từ chối duyệt. Các thông tin thay đổi không được cập nhật lên chức năng |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Từ chối duyệt" |
| 2 | Hệ thống | Hiển thị màn hình nhập lý do từ chối |
| 3 | Người dùng | Nhập lý do từ chối → nhấn "Xác nhận" |
| 4 | Hệ thống | Kiểm tra hợp lệ → Cập nhật trạng thái = Từ chối duyệt |
| 5 | Người dùng | Nhận thông báo "Từ chối duyệt thành công" |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_03 | Nếu trạng thái khác "Chờ duyệt" → báo lỗi "Trạng thái duyệt không hợp lệ" |
| BR_04 | Bản ghi Từ chối có trạng thái "Từ chối duyệt". Các thông tin thay đổi không cập nhật lên chức năng |
| BR_05 | "Ngày duyệt" hệ thống tự sinh theo YYYY-MM-DD HH:MM:SS |
| BR_06 | "Người duyệt" hiển thị username của Người từ chối |

## Màn hình tham khảo

> [Tham khảo URD trang 44–48 cho screenshots]
