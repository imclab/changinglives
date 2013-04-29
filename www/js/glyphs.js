var BITMAPS = {
    BIRD_OF_PREY: [
        [0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,0],
        [0,1,0,1,0,0,0,0,0],
        [0,1,1,1,0,0,0,0,0],
        [0,1,0,0,1,0,0,0,0],
        [0,1,0,0,0,1,1,1,0],
        [0,1,0,0,0,1,1,1,0],
        [0,1,0,0,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0]
    ],
    TRIPPY_TRIANGLES: [
        [0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0],
        [0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0],
        [0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0]
    ],
    SWOOPS: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0],
        [0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0],
        [1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1],
        [1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1],
        [0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0]
    ]
};


var GLYPH_SETS = {
    'no-border': [],
    'flower-corner': [{
        bitmap: BITMAPS.BIRD_OF_PREY,
        align: 'left',
        valign: 'top',
        grid_offset: 1,
        invert: false,
        vinvert: false
    }, {
        bitmap: BITMAPS.BIRD_OF_PREY,
        align: 'right',
        valign: 'top',
        grid_offset: 1,
        invert: true,
        vinvert: false
    }, {
        bitmap: BITMAPS.BIRD_OF_PREY,
        align: 'right',
        valign: 'bottom',
        grid_offset: 1,
        invert: true,
        vinvert: true
    }, {
        bitmap: BITMAPS.BIRD_OF_PREY,
        align: 'left',
        valign: 'bottom',
        grid_offset: 1,
        invert: false,
        vinvert: true
    }],
    'swash-border': [{
        bitmap: BITMAPS.SWOOPS,
        align: 'center',
        valign: 'top',
        grid_offset: 1,
        invert: false,
        vinvert: false
    }, {
        bitmap: BITMAPS.SWOOPS,
        align: 'center',
        valign: 'bottom',
        grid_offset: 1,
        invert: true,
        vinvert: true
    }],
    'triangle-border': [{
        bitmap: BITMAPS.TRIPPY_TRIANGLES,
        align: 'center',
        valign: 'top',
        grid_offset: 1,
        invert: false,
        vinvert: false
    }, {
        bitmap: BITMAPS.TRIPPY_TRIANGLES,
        align: 'center',
        valign: 'bottom',
        grid_offset: 1,
        invert: false,
        vinvert: true
    }]
};
