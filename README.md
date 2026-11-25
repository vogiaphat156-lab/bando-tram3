# bando-tram3
Website triển lãm nghệ thuật Trạm 3 – **Thưởng thức tác phẩm từ gạo**.

## Thêm hoặc thay ảnh

1. Tải ảnh thật lên thư mục `images/` bằng GitHub.
2. Mở `images.json` và thêm một đối tượng:

```json
{
  "title": "Tên tác phẩm",
  "caption": "Chú thích ngắn",
  "description": "Mô tả khi xem chi tiết",
  "src": "images/ten-anh.jpg",
  "group": "Tranh nghệ thuật",
  "ratio": "tall"
}
```

- Nhóm hợp lệ: `Tranh nghệ thuật`, `Sản phẩm thủ công`, `Sáng tạo độc đáo`.
- `ratio` có thể là `tall`, `square` hoặc `wide` để bố trí hợp lý.
- Dùng JPG/WebP, khuyến nghị 1200–1600 px và dưới 500 KB.

## Xóa hoặc thay thế

- **Xóa:** xóa mục khỏi `images.json`, sau đó xóa tệp trong `images/`.
- **Thay:** tải ảnh mới cùng tên hoặc đổi `src` trong `images.json`.

## Chạy thử

Mở bằng Live Server; không nên mở trực tiếp bằng `file://` vì trình duyệt có thể chặn `fetch('images.json')`.

## GitHub Pages

Repository Settings → Pages → Deploy from branch → `main` → `/ (root)`.

Hiện có 5 ảnh SVG mẫu. Chúng chỉ dùng để kiểm tra giao diện và không đại diện cho tác phẩm thật.
