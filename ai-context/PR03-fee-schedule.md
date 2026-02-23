# PR.03 — Danh mục biểu phí

## Mô tả chung

- **Mục đích**: Cho phép người dùng thiết lập và quản lý danh mục biểu phí của ngân hàng. Mỗi biểu phí tương ứng với một hoặc một nhóm sản phẩm, dịch vụ tùy theo nhu cầu quản lý.

### Chức năng trên màn hình

| STT | Chức năng | Mô tả |
|-----|-----------|-------|
| 1 | Thêm mới biểu phí | Cho phép thêm mới bản ghi biểu phí |
| 2 | Tải lên | Import một/nhiều bản ghi code phí trực thuộc biểu phí |
| 3 | Kiểm tra | Kiểm tra dữ liệu danh sách Code phí được tải lên |
| 4 | Sửa | Cho phép sửa bản ghi |
| 5 | Sao chép | Sao chép biểu phí đã có |
| 6 | Xem | Cho phép xem bản ghi |
| 7 | Tìm kiếm | Cho phép tìm kiếm dữ liệu trên lưới |
| 8 | Tải xuống | Cho phép tải xuống dữ liệu trên lưới ra file |
| 9 | Chuyển đổi biểu phí | Chuyển đổi một/một số code phí từ biểu phí đang gắn sang biểu phí khác |

---

## Thêm mới biểu phí

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Thêm mới biểu phí |
| Actor | Người dùng được phân quyền |
| Trigger | Chọn nút "Thêm mới" trên lưới "Danh mục biểu phí" |
| Pre-condition | Đăng nhập với vai trò Maker. Tồn tại ít nhất một code phí đã khai báo thành công tại "Danh mục SPDV" |
| Post-condition | Tạo thành công biểu phí cho các loại giao dịch của SPDV (từ cấp 2 đến cấp 6). Hiển thị tác vụ Thêm mới tại "Tác vụ chờ duyệt" |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Thêm mới" trên lưới "Biểu phí theo giao dịch" |
| 2 | Hệ thống | Hiển thị màn hình nhập thông tin |
| 3 | Người dùng | Nhập thông tin chung → Tải lên thông tin chi tiết Code phí → Ấn "Xác nhận" |
| 4 | Hệ thống | Kiểm tra hợp lệ → Lưu thành công → Hiển thị tác vụ tại Tác vụ chờ duyệt |
| 5 | Người dùng | Nhận thông báo thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Nhập đầy đủ các trường bắt buộc (*) trước khi "Xác nhận" |
| BR_02 | "Ngày hiệu lực", "Ngày hết hiệu lực", "Ngày ban hành" phải nhập theo định dạng DD/MM/YYYY |
| BR_03 | Chọn "Đóng" → không lưu thông tin |
| BR_04 | Trường "SPDV/Code phí" hiển thị danh sách cây "Danh mục SPDV và code phí" đã được Checker phê duyệt |
| BR_05 | Cho phép chọn nhiều Sản phẩm, nhiều Dịch vụ, nhiều Code phí để gom vào Biểu phí |
| BR_06 | Tên biểu phí và Mã biểu phí phải duy nhất |
| BR_07 | File upload danh sách code phí phải theo định dạng xlsx hoặc csv |
| BR_08 | Khi nhấn "Kiểm tra", hệ thống validate công thức tính phí; nếu lỗi → báo lỗi từng công thức và chặn lưu |
| BR_09 | SPDV tại phân vùng Thông tin chi tiết phải nằm trong SPDV cấp 6 đã khai báo và được Checker duyệt |
| BR_10 | Tên phí và Code phí phải duy nhất |
| BR_11 | Bản ghi chưa phê duyệt không hiển thị trên lưới "Danh mục biểu phí" |
| BR_12 | Bản ghi tạo thành công có trạng thái "Chờ duyệt" |
| BR_13 | "Ngày tạo" hệ thống tự sinh theo YYYY-MM-DD HH:MM:SS |
| BR_14 | "Người tạo" hiển thị username |

---

## Sao chép biểu phí

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Tạo biểu phí bằng cách sao chép dữ liệu của biểu phí đã tồn tại |
| Actor | Người dùng được phân quyền |
| Trigger | Chọn nút "Sao chép" tại bản ghi Biểu phí trên lưới |
| Pre-condition | Đăng nhập với vai trò Maker. Tồn tại ít nhất một biểu phí đã khai báo |
| Post-condition | Tạo thành công biểu phí. Hiển thị tác vụ Thêm mới tại "Tác vụ chờ duyệt" |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Chọn nút "Sao chép" trên lưới |
| 2 | Hệ thống | Hiển thị biểu phí mới có Thông tin chung và Thông tin chi tiết giống biểu phí gốc |
| 3 | Người dùng | Sửa thông tin chung → Tải lên Code phí → Ấn "Xác nhận" |
| 4 | Hệ thống | Kiểm tra hợp lệ → Lưu thành công → Hiển thị tác vụ tại Tác vụ chờ duyệt |
| 5 | Người dùng | Nhận thông báo thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Nhập đầy đủ trường bắt buộc (*) |
| BR_02 | Chọn "Đóng" → không lưu |
| BR_03 | Tên biểu phí và Mã biểu phí phải duy nhất |
| BR_04 | Khi sao chép biểu phí A thành A', các code phí của A vẫn hiển thị đầy đủ trên lưới Thông tin chi tiết |
| BR_05 | Trên biểu phí A' có thể sửa danh sách Code phí bằng cách upload file |
| BR_06 | File upload phải theo định dạng xlsx hoặc csv |
| BR_07 | Khi nhấn "Kiểm tra", validate công thức; nếu lỗi → báo lỗi từng công thức và chặn lưu |
| BR_08 | Tên phí và Code phí phải duy nhất |
| BR_09 | Bản ghi chưa phê duyệt không hiển thị trên lưới |
| BR_10 | Bản ghi tạo thành công có trạng thái "Chờ duyệt" |
| BR_11 | "Ngày tạo" hệ thống tự sinh theo YYYY-MM-DD HH:MM:SS |
| BR_12 | "Người tạo" hiển thị username của Người Sao chép |

---

## Chuyển đổi biểu phí

### Thông tin chung

| Field | Value |
|-------|-------|
| Objective | Chuyển đổi một hoặc một số code phí từ biểu phí đang gắn sang biểu phí mới |
| Actor | Người dùng được phân quyền |
| Trigger | Chọn nút "Chuyển đổi Biểu phí" tại màn hình "Sửa" Biểu phí |
| Pre-condition | Đăng nhập với vai trò Maker. Tồn tại tối thiểu một Code phí đã gắn với biểu phí |
| Post-condition | Chuyển đổi thành công Code phí ở trạng thái chờ duyệt. Hiển thị tác vụ "Sửa" tại "Tác vụ chờ duyệt" |

### Luồng nghiệp vụ

| Step | Actor | Description |
|------|-------|-------------|
| 1 | Người dùng | Tích chọn các Code phí cần chuyển tại màn hình "Sửa" biểu phí → ấn "Chuyển đổi Biểu phí" |
| 2 | Hệ thống | Hiển thị màn hình chọn Biểu phí mới và thống kê: Số lượng Code phí cũ, số chuyển, số biểu phí mới (hiện tại), số biểu phí mới (sau chuyển) |
| 3 | Người dùng | Chọn Biểu phí mới → Xác nhận |
| 4 | Hệ thống | Kiểm tra hợp lệ → Lưu thành công → Hiển thị tác vụ "Sửa" tại Tác vụ chờ duyệt |
| 5 | Người dùng | Nhận thông báo tạo yêu cầu Sửa thành công |

### Business Rules

| BR Code | Description |
|---------|-------------|
| BR_01 | Biểu phí mới phải khác Biểu phí hiện tại |
| BR_02 | Chọn "Đóng" → không chuyển |
| BR_03 | Hệ thống validate Biểu phí mới đã cài đặt SPDV phù hợp với Code phí được chọn |
| BR_04 | Bản ghi Sửa chưa phê duyệt vẫn hiển thị trên Biểu phí cũ, chưa hiển thị trên Biểu phí mới |
| BR_05 | Bản ghi Chuyển đổi có trạng thái "Chờ duyệt" |

## Màn hình tham khảo

> [Tham khảo URD trang 21–29 cho screenshots]
