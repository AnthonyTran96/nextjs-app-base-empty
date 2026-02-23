# OT.02 — Tác vụ pending của tôi

## Mô tả chung

- **Mục đích**: Tập hợp các tác vụ do người dùng đang đăng nhập tạo ra và đang ở trạng thái Chờ duyệt/Từ chối duyệt.
- User mặc định nhìn thấy các tác vụ do mình tạo ra có trạng thái "Chờ duyệt" hoặc "Từ chối duyệt".

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Xem | Cho phép xem tác vụ chờ duyệt/từ chối duyệt |
| 2 | Sửa | Cho phép sửa tác vụ bị từ chối duyệt |
| 3 | Xóa | Cho phép xóa tác vụ bị từ chối duyệt |
| 4 | Lọc | Cho phép tìm kiếm dữ liệu trên lưới |
| 5 | Tải xuống | Cho phép tải xuống dữ liệu trên lưới ra file |

---

## Sửa tác vụ từ chối

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Sửa một tác vụ Thêm mới/Sửa đang ở trạng thái "Từ chối duyệt" |
| Actor | Người dùng được phân quyền |
| Trigger | Chọn nút "Sửa" tại bản ghi Tác vụ cần sửa |
| Pre-condition | Đăng nhập với vai trò Maker |
| Post-condition | Sửa thành công. Trạng thái = Chờ duyệt. Giữ nguyên tác vụ Thêm mới/Sửa ban đầu |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Sửa" |
| 2 | Hệ thống | Hiển thị màn hình Thêm mới/Sửa tương ứng với chức năng |
| 3 | Người dùng | Chọn "Xác nhận" |
| 4 | Hệ thống | Kiểm tra hợp lệ → Lưu → Cập nhật trạng thái = Chờ duyệt |
| 5 | Người dùng | Nhận thông báo thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Kiểm tra bản ghi phải thỏa mãn đồng thời: Trạng thái = "Từ chối duyệt", Hành động = Tạo mới/Sửa, Bản ghi là bản ghi gần nhất của mã định danh. Nếu vi phạm → báo lỗi "Dữ liệu không thỏa mãn điều kiện sửa" |
| BR_02 | Thông tin hiển thị trên màn hình sửa là thông tin đang chờ duyệt. Ràng buộc nhập liệu tuân thủ theo chức năng tương ứng |
| BR_03 | Sửa bản ghi hành động Tạo mới → yêu cầu mới có hành động Tạo mới. Sửa bản ghi hành động Sửa → yêu cầu mới có hành động Sửa |
| BR_04 | "Ngày tạo" được cập nhật là thời gian thực tế khi sửa lại |
| BR_05 | "Ngày duyệt" và "Người duyệt" được cập nhật để trống |

---

## Xóa tác vụ từ chối

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Xóa một tác vụ đang ở trạng thái "Từ chối duyệt" |
| Actor | Người dùng được phân quyền |
| Trigger | Chọn nút "Xóa" tại bản ghi Tác vụ cần xóa |
| Pre-condition | Đăng nhập với vai trò Maker |
| Post-condition | Xóa thành công. Không hiển thị tác vụ. Dữ liệu tại các chức năng không bị ảnh hưởng |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Xóa" |
| 2 | Hệ thống | Hiển thị màn hình xác nhận |
| 3 | Người dùng | Chọn "Xác nhận" |
| 4 | Hệ thống | Kiểm tra hợp lệ → Không lưu thông tin nghiệp vụ |
| 5 | Người dùng | Nhận thông báo thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Kiểm tra trạng thái phải là "Từ chối duyệt". Nếu vi phạm → báo lỗi "Dữ liệu không thỏa mãn điều kiện xóa" |
| BR_02 | Tác vụ bị xóa không còn hiển thị tại "Tác vụ chờ duyệt" và "Tác vụ pending của tôi". Các thông tin thay đổi không cập nhật lên chức năng |

## Màn hình tham khảo

> [Tham khảo URD trang 49–52 cho screenshots]
