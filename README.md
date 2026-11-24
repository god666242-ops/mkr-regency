# Hotel MKR Regency
Next.js 14 + Tailwind CSS. Booking uses the PureBook `<hotel-booking-engine>` button.

- `npm install && npm run dev` then open http://localhost:3103
- Edit `site.js` only: PureBook slug, phone, email, rooms, amenities, FAQ, nearby places, photos.
- Photos: originals live in `images-original/` (never served). `python3 scripts/optimize-images.py` turns them into small responsive WebP files in `public/images` (needs `pip install pillow`). To add a photo, drop it in `images-original/`, add a line to `MAP` in the script, re-run, then use its short name (e.g. "king-2") in `site.js`.
- Address, phone, rating and map coordinates come from the hotel's Google listing: confirm them. Items marked TODO are placeholders.
- Set `NEXT_PUBLIC_SITE_URL` to the live domain before deploying.
