"""Generates launcher icons, splash and Play Store graphics. One responsibility: raster assets."""
import os
from PIL import Image, ImageDraw

RES = 'android/app/src/main/res'
BG = (43, 27, 14, 255)
SUN = (255, 176, 59, 255)
CLOUD = (245, 236, 224, 255)
DENS = {'mdpi': 1, 'hdpi': 1.5, 'xhdpi': 2, 'xxhdpi': 3, 'xxxhdpi': 4}

def glyph(size, scale=1.0):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    u = size / 108 * scale
    o = size * (1 - scale) / 2
    def r(x0, y0, x1, y1, f):
        d.ellipse([o + x0 * u, o + y0 * u, o + x1 * u, o + y1 * u], fill=f)
    r(50, 24, 82, 56, SUN)
    r(30, 48, 58, 76, CLOUD); r(46, 40, 76, 76, CLOUD); r(62, 52, 84, 76, CLOUD)
    d.rounded_rectangle([o + 40 * u, o + 58 * u, o + 74 * u, o + 76 * u], radius=int(9 * u), fill=CLOUD)
    return img

def legacy(size, round_):
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    mask = Image.new('L', (size, size), 0)
    md = ImageDraw.Draw(mask)
    if round_: md.ellipse([0, 0, size - 1, size - 1], fill=255)
    else: md.rounded_rectangle([0, 0, size - 1, size - 1], radius=size // 5, fill=255)
    bg = Image.new('RGBA', (size, size), BG)
    img.paste(bg, (0, 0), mask)
    g = glyph(size, 0.78)
    img.alpha_composite(g)
    return Image.composite(img, Image.new('RGBA', (size, size), (0, 0, 0, 0)), mask)

for name, k in DENS.items():
    d = f'{RES}/mipmap-{name}'
    legacy(int(48 * k), False).save(f'{d}/ic_launcher.png')
    legacy(int(48 * k), True).save(f'{d}/ic_launcher_round.png')
    glyph(int(108 * k), 0.78).save(f'{d}/ic_launcher_foreground.png')

open(f'{RES}/values/ic_launcher_background.xml', 'w').write(
    '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#2B1B0E</color>\n</resources>\n')

for folder in [f for f in os.listdir(RES) if f.startswith('drawable-') and 'dpi' in f]:
    p = f'{RES}/{folder}/splash.png'
    if os.path.exists(p):
        w, h = Image.open(p).size
        s = Image.new('RGBA', (w, h), (0, 0, 0, 255))
        g = glyph(min(w, h) // 3)
        s.alpha_composite(g, ((w - g.width) // 2, (h - g.height) // 2))
        s.save(p)
p = f'{RES}/drawable/splash.png'
Image.new('RGBA', (480, 480), (0, 0, 0, 255)).save(p)

os.makedirs('store', exist_ok=True)
big = legacy(512, False); big.save('store/icon-512.png')
fg = Image.new('RGBA', (1024, 500), BG)
g = glyph(420); fg.alpha_composite(g, (302, 40)); fg.convert('RGB').save('store/feature-graphic-1024x500.png')
print('ok')
