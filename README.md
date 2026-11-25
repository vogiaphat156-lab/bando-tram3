# Trạm 3 — Nghệ thuật từ hạt gạo

Triển lãm trực tuyến thuộc dự án KHKT **Hành trình kết nối Gạo Thơm Đăk La**. Trang web tĩnh, không cần bước build.

## Quản lý tác phẩm

Thêm ảnh vào thư mục `images/`, sau đó thêm một mục vào `images.json`:

```json
{
  "title": "Tên tác phẩm",
  "caption": "Chú thích ngắn",
  "description": "Mô tả hiển thị khi mở ảnh",
  "src": "images/ten-anh.jpg",
  "group": "Tranh nghệ thuật",
  "ratio": "tall"
}
```

Nhóm hỗ trợ: `Tranh nghệ thuật`, `Sản phẩm thủ công`, `Sáng tạo độc đáo`. Dùng `ratio` là `tall`, `square` hoặc `wide` để cung cấp kích thước gần đúng cho trình duyệt; ảnh vẫn giữ chiều cao tự nhiên và được sắp trong masonry.

- **Thêm:** tải ảnh lên `images/`, bổ sung đối tượng JSON, chú ý dấu phẩy giữa các mục.
- **Xóa:** xóa mục khỏi `images.json`, sau đó xóa tệp ảnh nếu không còn dùng.
- **Thay:** tải ảnh mới và cập nhật `src`; hoặc thay nội dung ảnh dưới cùng tên tệp.
- Ưu tiên JPG/WebP, chiều rộng khoảng 1200–1600 px, dung lượng nén phù hợp để tải nhanh.

Năm tệp SVG hiện tại là **ảnh mẫu giao diện**, không đại diện cho tác phẩm thật; hãy thay chúng khi có ảnh triển lãm.

## Chạy và xuất bản

Dùng Live Server hoặc một máy chủ tĩnh khi thử cục bộ (không mở trực tiếp `file://`, vì `fetch()` cần HTTP).

GitHub Pages: **Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save**. Các đường dẫn CSS, JavaScript và ảnh dùng đường dẫn tương đối, phù hợp cả khi website được phục vụ tại `https://<username>.github.io/bando-tram3/`.
