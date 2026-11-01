"""Kit logo LUQUAV : même icône (deux chevrons gris/orange autour d'un losange), version vectorielle modernisée."""
import os, sys
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

OUT = sys.argv[1]
os.makedirs(OUT, exist_ok=True)
HERE = os.path.dirname(os.path.abspath(__file__))

# Géométrie relevée sur le logo d'origine (600 px), idéalisée sur une grille 472 x 472, centre (236, 236).
GRAY = [(161, 75), (236, 150), (150, 236), (236, 322), (236, 472), (0, 236)]
ORANGE = [(236, 0), (472, 236), (311, 397), (236, 322), (322, 236), (236, 150)]
NAVY, NAVY_DEEP, INK = '#17304E', '#0E1E36', '#0B0F17'
ORANGE_A, ORANGE_B = '#FFA623', '#EB850D'
GRAY_A, GRAY_B = '#B3B8C0', '#8C929B'

def poly(points, dx=0, dy=0, s=1.0):
    return 'M' + ' L'.join(f'{dx + x * s:.2f} {dy + y * s:.2f}' for x, y in points) + ' Z'

def defs(uid):
    return (f'<defs><linearGradient id="o{uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{ORANGE_A}"/><stop offset="1" stop-color="{ORANGE_B}"/></linearGradient>'
            f'<linearGradient id="g{uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{GRAY_A}"/><stop offset="1" stop-color="{GRAY_B}"/></linearGradient></defs>')

def icon(dx, dy, size, uid, mono=None):
    # Le contour arrondi déborde de stroke/2 : on réduit d'autant pour rester dans le cadre.
    stroke = max(1.0, 7 * size / 472)
    s = (size - stroke) / 472
    dx, dy = dx + stroke / 2, dy + stroke / 2
    gray_fill, orange_fill = (mono, mono) if mono else (f'url(#g{uid})', f'url(#o{uid})')
    gray_opacity = ' fill-opacity="0.55"' if mono else ''
    # Léger arrondi des angles : contour de la même couleur, joint arrondi.
    return (f'<path d="{poly(GRAY, dx, dy, s)}" fill="{gray_fill}"{gray_opacity} stroke="{gray_fill}"{gray_opacity.replace("fill", "stroke")} stroke-width="{stroke:.2f}" stroke-linejoin="round"/>'
            f'<path d="{poly(ORANGE, dx, dy, s)}" fill="{orange_fill}" stroke="{orange_fill}" stroke-width="{stroke:.2f}" stroke-linejoin="round"/>')

font = TTFont(os.path.join(HERE, 'font', 'Manrope.ttf'))
bold = instantiateVariableFont(TTFont(os.path.join(HERE, 'font', 'Manrope.ttf')), {'wght': 800})
medium = instantiateVariableFont(font, {'wght': 600})

def text_path(face, text, x, baseline, cap_height, tracking=0.0):
    """Texte converti en tracés : aucune dépendance aux polices installées."""
    glyphs, cmap, hmtx = face.getGlyphSet(), face.getBestCmap(), face['hmtx']
    caps = face['OS/2'].sCapHeight
    scale = cap_height / caps
    parts, cursor = [], 0.0
    for char in text:
        if char == ' ':
            cursor += hmtx['space'][0] * scale; continue
        name = cmap[ord(char)]
        pen = SVGPathPen(glyphs)
        glyphs[name].draw(TransformPen(pen, (scale, 0, 0, -scale, x + cursor, baseline)))
        parts.append(pen.getCommands())
        cursor += hmtx[name][0] * scale + tracking * cap_height
    return ' '.join(parts), cursor - tracking * cap_height

def svg(width, height, body, uid, background=None, radius=0):
    bg = f'<rect width="{width}" height="{height}" rx="{radius}" fill="{background}"/>' if background else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="LUQUAV">{defs(uid)}{bg}{body}</svg>\n'

def write(name, content):
    with open(os.path.join(OUT, name), 'w') as handle: handle.write(content)

def horizontal(word_color, sub=None, sub_color=ORANGE_B, mono=None, uid='h'):
    icon_size, cap = 120, 52
    word, width = text_path(bold, 'LUQUAV', 150, 90, cap, tracking=0.09)
    body = icon(0, 4, icon_size, uid, mono) + f'<path d="{word}" fill="{word_color}"/>'
    total = 150 + width
    if sub:
        sub_path, sub_width = text_path(medium, sub, 152, 118, 15, tracking=0.42)
        body += f'<path d="{sub_path}" fill="{sub_color}"/>'
        total = max(total, 152 + sub_width)
    return svg(round(total + 4), 128, body, uid)

def vertical(word_color, uid='v'):
    word, width = text_path(bold, 'LUQUAV', 0, 0, 48, tracking=0.09)
    total = max(200, width)
    word, width = text_path(bold, 'LUQUAV', (total - width) / 2, 262, 48, tracking=0.09)
    return svg(round(total), 270, icon((total - 196) / 2, 0, 196, uid) + f'<path d="{word}" fill="{word_color}"/>', uid)

def app_icon(background, uid='a', size=1024):
    pad = size * 0.2
    return svg(size, size, icon(pad, pad, size - 2 * pad, uid), uid, background, radius=size * 0.225)

def classic(uid='c', size=600):
    # Composition d'origine (texte sur l'icône), modernisée : fond nuit, texte vectoriel net, ombre douce.
    pad = size * 0.1
    word, width = text_path(bold, 'LUQUAV', 0, 0, size * 0.12, tracking=0.05)
    word, width = text_path(bold, 'LUQUAV', (size - width) / 2, size / 2 + size * 0.06, size * 0.12, tracking=0.05)
    shadow = f'<filter id="s{uid}" x="-10%" y="-30%" width="120%" height="160%"><feDropShadow dx="0" dy="{size * 0.006:.1f}" stdDeviation="{size * 0.01:.1f}" flood-color="#000" flood-opacity="0.45"/></filter>'
    return svg(size, size, f'<defs>{shadow}</defs>' + icon(pad, pad, size - 2 * pad, uid) + f'<path d="{word}" fill="#FFFFFF" filter="url(#s{uid})"/>', uid, INK, radius=size * 0.12)

write('luquav-logo-horizontal.svg', horizontal(NAVY))
write('luquav-logo-horizontal-blanc.svg', horizontal('#FFFFFF', uid='hw'))
write('luquav-logo-vertical.svg', vertical(NAVY))
write('luquav-logo-vertical-blanc.svg', vertical('#FFFFFF', uid='vw'))
write('luquav-business-horizontal.svg', horizontal(NAVY, sub='BUSINESS', uid='b'))
write('luquav-business-horizontal-blanc.svg', horizontal('#FFFFFF', sub='BUSINESS', uid='bw'))
write('luquav-icone.svg', svg(472, 472, icon(0, 0, 472, 'i'), 'i'))
write('luquav-icone-app-nuit.svg', app_icon(NAVY_DEEP))
write('luquav-icone-app-blanc.svg', app_icon('#FFFFFF', uid='aw'))
write('luquav-logo-classique.svg', classic())
write('luquav-logo-mono-nuit.svg', horizontal(NAVY, mono=NAVY, uid='mn'))
write('luquav-logo-mono-blanc.svg', horizontal('#FFFFFF', mono='#FFFFFF', uid='mw'))
write('favicon.svg', app_icon(NAVY_DEEP, uid='f', size=64))
print('ok', sorted(os.listdir(OUT)))
