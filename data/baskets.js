// data/baskets.js — 15 gear baskets, all use cases, Amazon buy links

// Each product has: name, amazonSearch (exact search term for Amazon), priceINR

window.BASKETS_DATA = [

// ══════════════════════════════════════════════════════
// STUDIO BASKETS (have lights)
// ══════════════════════════════════════════════════════

{
  id:'b1', num:'01', topPick:true,
  ribbon:'⭐ TOP PICK — Best All-Round · Studio + Travel + Nature',
  tags:['studio','travel','pro','sony'],
  label:'Best All-Round', labelIcon:'🏆',
  totalINR:268000, totalClass:'green',
  thumbs:[
    {icon:'💡',brand:'Godox ×2',name:'SL100D LED'},
    {icon:'📷',brand:'Sony',name:'a6700 Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🔍',brand:'Sony',name:'18-135mm OSS'},
    {icon:'🎬',brand:'DJI',name:'RS 3 Mini'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'💡 Studio Lights', icon:'💡', lbl:'Godox SL100D ×2\n90cm Octa Softbox',
      name:'2× Godox SL100D LED', badge:'Video-First',
      amazonSearch:'Godox SL100D LED Video Light', priceINR:28000,
      specs:['<strong>100W continuous LED</strong> — seamless photo + video, no flash sync','CRI 96+ renders fabric colors accurately','Bowens mount 90cm Octa Softboxes ×2','Dimmer 0–100%, quiet cooling fan'],
      tags:[{t:'Continuous video',c:'pro'},{t:'CRI 96+',c:'pro'},{t:'No sync issues',c:'pro'}]
    },
    {
      cat:'📷 Camera', icon:'📷', lbl:'Sony Alpha a6700\nAPS-C Mirrorless',
      name:'Sony a6700 Body', badge:'Best APS-C',
      amazonSearch:'Sony Alpha a6700 body', priceINR:121000,
      specs:['<strong>4K 120fps 10-bit 4:2:2</strong> — 6K oversampled, cleaner than most full-frames','S-Log3 + LUT import for cinematic grades','<strong>5-axis IBIS</strong> + AI subject tracking','EVF + fully articulating screen'],
      tags:[{t:'4K 120fps',c:'pro'},{t:'IBIS + AI AF',c:'pro'},{t:'S-Log3',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🔭 Studio Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nDC DN Sony E',
          name:'Sigma 18-50mm f/2.8', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
          priceINR:35000,
          specs:['<strong>f/2.8 constant</strong> — creamy bokeh on clothing close-ups','27–75mm equiv. · silent AF for video','290g — perfectly balanced on gimbals'],
          tags:[{t:'f/2.8 constant',c:'pro'},{t:'Studio hero',c:'pro'}]
        },
        {
          cat:'🔍 Travel Lens', icon:'🔍', lbl:'Sony 18-135mm f/3.5-5.6\nOSS Travel Zoom',
          name:'Sony 18-135mm OSS', amazonSearch:'Sony E 18-135mm f3.5-5.6 OSS SEL18135',
          priceINR:35000,
          specs:['<strong>202mm equiv. reach</strong> — travel, nature, wildlife','Built-in OSS optical stabilisation','325g · compact 7.5× zoom'],
          tags:[{t:'202mm reach',c:'pro'},{t:'Built-in OSS',c:'pro'}]
        }
      ]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Gimbal', icon:'🎬', lbl:'DJI RS 3 Mini\n3-Axis Stabiliser',
          name:'DJI RS 3 Mini', amazonSearch:'DJI RS 3 Mini gimbal stabilizer',
          priceINR:26000,
          specs:['2kg payload · OLED touchscreen','Native vertical mode for Reels','10hr battery · BT shutter release'],
          tags:[{t:'Reels vertical',c:'pro'},{t:'DJI ecosystem',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['<strong>300MB/s write</strong> — required for 4K 120fps 10-bit','512GB shoots all day without swapping'],
          tags:[{t:'V90 UHS-II',c:'pro'},{t:'a6700 compatible',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Lights',inr:28000},{lbl:'Camera',inr:121000},
    {lbl:'Lenses',inr:70000},{lbl:'Gimbal',inr:26000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>⭐ Why this is #1:</strong> Sigma f/2.8 for studio bokeh. Sony 18-135mm for travel reach. Godox LED lights mean video shoots without any flash sync headache. a6700\'s 6K-oversampled 4K with S-Log3 beats iPhone footage after a quick LUT. SanDisk V90 handles every recording mode. No compromises under ₹2.7L.'
},

{
  id:'b2', num:'02', topPick:false,
  tags:['studio','pro','sony'],
  label:'Studio Purist', labelIcon:'🧵',
  totalINR:236000, totalClass:'green',
  thumbs:[
    {icon:'💡',brand:'Godox ×2',name:'SL100D LED'},
    {icon:'📷',brand:'Sony',name:'a6700 Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🎬',brand:'DJI',name:'RS 3 Mini'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'💡 Studio Lights', icon:'💡', lbl:'Godox SL100D ×2\n90cm Octa Softbox',
      name:'2× Godox SL100D LED', amazonSearch:'Godox SL100D LED Video Light',
      priceINR:28000,
      specs:['100W continuous LED CRI 96+ 5600K','Bowens mount octa softboxes for soft wrap light','Quiet fan — no audio bleed in video'],
      tags:[{t:'Continuous video',c:'pro'},{t:'CRI 96+',c:'pro'}]
    },
    {
      cat:'📷 Camera', icon:'📷', lbl:'Sony Alpha a6700\nAPS-C Mirrorless',
      name:'Sony a6700 Body', badge:'Studio King',
      amazonSearch:'Sony Alpha a6700 body', priceINR:121000,
      specs:['4K 120fps 10-bit S-Log3','5-axis IBIS · AI subject tracking','EVF + articulating screen'],
      tags:[{t:'Best video APS-C',c:'pro'},{t:'IBIS',c:'pro'}]
    },
    {
      cat:'🔭 Studio Lens Only', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nDC DN Sony E',
      name:'Sigma 18-50mm f/2.8 DC DN', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
      priceINR:35000,
      specs:['<strong>f/2.8 constant</strong> — professional bokeh for embroidery detail','Silent stepping motor for video pulls','No travel zoom — saves ₹35K vs Basket 1'],
      tags:[{t:'f/2.8 constant',c:'pro'},{t:'Studio only',c:'info'},{t:'Saves ₹35K',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Gimbal', icon:'🎬', lbl:'DJI RS 3 Mini\n3-Axis Stabiliser',
          name:'DJI RS 3 Mini', amazonSearch:'DJI RS 3 Mini gimbal stabilizer',
          priceINR:26000,
          specs:['2kg payload · OLED screen','Vertical mode for Reels'],
          tags:[{t:'Reels vertical',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['300MB/s — handles all a6700 video modes'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Lights',inr:28000},{lbl:'Camera',inr:121000},
    {lbl:'Studio Lens',inr:35000},{lbl:'Gimbal',inr:26000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Studio Purist:</strong> Drop the travel lens, save ₹35K, focus 100% on indoor fashion and product shoots. a6700 + Sigma f/2.8 + Godox LED is the definitive studio trio.'
},

{
  id:'b3', num:'03', topPick:false,
  tags:['studio','pro'],
  label:'Strobe Power', labelIcon:'⚡',
  totalINR:271000, totalClass:'amber',
  thumbs:[
    {icon:'⚡',brand:'Godox',name:'SK400II-V Kit ×2'},
    {icon:'📷',brand:'Sony',name:'a6700 + 18-135mm'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🎬',brand:'DJI',name:'RS 3 Mini'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'⚡ Studio Strobes', icon:'⚡', lbl:'Godox SK400II-V\n400Ws Strobe ×2',
      name:'Godox SK400II-V 2-Light Kit', amazonSearch:'Godox SK400II-V studio strobe flash kit',
      priceINR:38000,
      specs:['<strong>400Ws strobe</strong> — freezes fabric motion for embroidery detail shots','2.4G wireless X system — control both from camera','4× more powerful than 100W LED'],
      tags:[{t:'Freeze motion',c:'pro'},{t:'400Ws power',c:'pro'},{t:'Photo only',c:'con'}]
    },
    {
      cat:'📷 Camera + Kit', icon:'📷', lbl:'Sony a6700\n+ 18-135mm Kit Lens',
      name:'Sony a6700 18-135mm Kit', amazonSearch:'Sony Alpha a6700 18-135mm kit',
      priceINR:146000,
      specs:['4K 120fps 10-bit · 5-axis IBIS','18-135mm travel lens included in kit'],
      tags:[{t:'Best video APS-C',c:'pro'},{t:'Kit lens included',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🔍 Lens 1 (in kit)', icon:'🔍', lbl:'Sony 18-135mm OSS\n(Included in kit)',
          name:'Sony 18-135mm OSS', amazonSearch:'Sony E 18-135mm f3.5-5.6 OSS SEL18135',
          priceINR:0,
          specs:['202mm equiv. travel + nature','Built-in OSS'],
          tags:[{t:'Included in kit',c:'info'}]
        },
        {
          cat:'🔭 Lens 2 (add-on)', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nStudio Add-On',
          name:'Sigma 18-50mm f/2.8 studio lens', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
          priceINR:35000,
          specs:['f/2.8 constant studio bokeh','Can buy this next month if over budget'],
          tags:[{t:'Studio upgrade',c:'pro'}]
        }
      ]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Gimbal', icon:'🎬', lbl:'DJI RS 3 Mini\n3-Axis Stabiliser',
          name:'DJI RS 3 Mini', amazonSearch:'DJI RS 3 Mini gimbal stabilizer',
          priceINR:26000,
          specs:['2kg payload · OLED screen · Reels vertical'],
          tags:[{t:'Reels vertical',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['300MB/s write — handles RAW burst buffer'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Strobes',inr:38000},{lbl:'Cam+Lens Kit',inr:146000},
    {lbl:'Sigma Lens',inr:35000},{lbl:'Gimbal',inr:26000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Strobe Power:</strong> 400Ws freezes embroidery at any shutter speed. Maximum sharpness on fabric details. Add Sigma f/2.8 next month as a separate purchase to stay in budget.'
},

{
  id:'b4', num:'04', topPick:false,
  tags:['studio','budget'],
  label:'Budget Studio', labelIcon:'💡',
  totalINR:172000, totalClass:'green',
  thumbs:[
    {icon:'💡',brand:'Godox ×2',name:'SL60IID LED'},
    {icon:'🎥',brand:'Sony',name:'ZV-E10 II Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🎯',brand:'Zhiyun',name:'Crane M2S'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'💡 Studio Lights', icon:'💡', lbl:'Godox SL60IID ×2\n60W Continuous LED',
      name:'2× Godox SL60IID + Softboxes', amazonSearch:'Godox SL60IID LED video light',
      priceINR:18000,
      specs:['60W continuous LED — great for close-up clothing','CRI 95+ · Bowens mount'],
      tags:[{t:'Budget lights',c:'pro'},{t:'CRI 95+',c:'pro'}]
    },
    {
      cat:'🎥 Camera', icon:'🎥', lbl:'Sony ZV-E10 II\nVlog Camera',
      name:'Sony ZV-E10 II', badge:'Budget Smart',
      amazonSearch:'Sony ZV-E10 II vlog camera body', priceINR:75000,
      specs:['Same 26MP sensor as a6700','4K 60fps 10-bit S-Log3 + LUT import','₹46K cheaper than a6700 — same image quality'],
      tags:[{t:'Same sensor as a6700',c:'pro'},{t:'10-bit video',c:'pro'},{t:'No IBIS',c:'con'}]
    },
    {
      cat:'🔭 Studio Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nDC DN Sony E',
      name:'Sigma 18-50mm f/2.8 lens', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
      priceINR:35000,
      specs:['f/2.8 constant — beautiful product bokeh','Best single-lens studio choice'],
      tags:[{t:'f/2.8 constant',c:'pro'},{t:'Studio hero',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎯 Gimbal', icon:'🎯', lbl:'Zhiyun Crane M2S\nCompact Gimbal',
          name:'Zhiyun Crane M2S', amazonSearch:'Zhiyun Crane M2S gimbal stabilizer',
          priceINR:18000,
          specs:['Compact · perfect for ZV-E10 II + Sigma combo'],
          tags:[{t:'Compact',c:'pro'},{t:'Budget friendly',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['300MB/s — handles ZV-E10 II 10-bit video'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Lights',inr:18000},{lbl:'Camera',inr:75000},
    {lbl:'Sigma Lens',inr:35000},{lbl:'Gimbal',inr:18000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Budget Studio King:</strong> Professional 10-bit video + studio bokeh under ₹1.75L. ZV-E10 II delivers identical image quality to the a6700 at 4K 60fps. Best value studio setup on this list.'
},

{
  id:'b5', num:'05', topPick:false,
  tags:['studio','budget'],
  label:'Budget Fujifilm', labelIcon:'🎞️',
  totalINR:183000, totalClass:'green',
  thumbs:[
    {icon:'💡',brand:'Godox ×2',name:'SL60IID LED'},
    {icon:'🎞️',brand:'Fujifilm',name:'X-S20 Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8 X'},
    {icon:'🎬',brand:'DJI',name:'RS 3 Mini'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'💡 Studio Lights', icon:'💡', lbl:'Godox SL60IID ×2\n60W Continuous LED',
      name:'2× Godox SL60IID LED', amazonSearch:'Godox SL60IID LED video light',
      priceINR:18000,
      specs:['60W continuous CRI 95+ Bowens mount'],
      tags:[{t:'Budget lights',c:'pro'}]
    },
    {
      cat:'🎞️ Camera', icon:'🎞️', lbl:'Fujifilm X-S20\nBody Only',
      name:'Fujifilm X-S20 Body', badge:'Color Science',
      amazonSearch:'Fujifilm X-S20 mirrorless camera body', priceINR:115000,
      specs:['<strong>Film Simulations</strong> — Velvia, Classic Chrome, Eterna — signature look without editing','6.2K → 4K 10-bit F-Log2','5-axis IBIS + EVF'],
      tags:[{t:'Iconic Fuji colors',c:'pro'},{t:'IBIS + EVF',c:'pro'}]
    },
    {
      cat:'🔭 Studio Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nX-Mount Version',
      name:'Sigma 18-50mm f/2.8 Fuji X mount', amazonSearch:'Sigma 18-50mm f2.8 DC DN Fuji X mount',
      priceINR:40000,
      specs:['f/2.8 constant · Fuji color + Sigma sharpness = stunning fabrics','Renders deep reds and golds beautifully'],
      tags:[{t:'f/2.8 constant',c:'pro'},{t:'Fuji color synergy',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Gimbal', icon:'🎬', lbl:'DJI RS 3 Mini\n3-Axis Stabiliser',
          name:'DJI RS 3 Mini', amazonSearch:'DJI RS 3 Mini gimbal stabilizer',
          priceINR:26000,
          specs:['Handles X-S20 + Sigma well · Reels vertical'],
          tags:[{t:'Reels vertical',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['Handles Fuji All-Intra heavy formats'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Lights',inr:18000},{lbl:'Camera',inr:115000},
    {lbl:'Sigma Lens',inr:40000},{lbl:'Gimbal',inr:26000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Budget Fujifilm Studio:</strong> Fuji X-S20 color science is unmatched at this price. Sigma f/2.8 renders fabric with incredible depth. Under ₹1.85L with a look no Sony preset can replicate.'
},

// ══════════════════════════════════════════════════════
// TRAVEL BASKETS (NO studio lights — portable only)
// ══════════════════════════════════════════════════════

{
  id:'b6', num:'06', topPick:false,
  ribbon:'✈️ TRAVEL SPECIAL — No Studio Lights · Go Anywhere',
  tags:['travel','pro','sony'],
  label:'Travel Pro', labelIcon:'✈️',
  totalINR:223000, totalClass:'green',
  thumbs:[
    {icon:'📷',brand:'Sony',name:'a6700 Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🔍',brand:'Sony',name:'18-135mm OSS'},
    {icon:'🎬',brand:'DJI',name:'RS 3 Mini'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'📷 Camera', icon:'📷', lbl:'Sony Alpha a6700\nAPS-C Mirrorless',
      name:'Sony a6700 Body', badge:'Travel King',
      amazonSearch:'Sony Alpha a6700 body', priceINR:121000,
      specs:['<strong>5-axis IBIS</strong> — hand-holdable without gimbal for quick shots','4K 120fps 10-bit S-Log3','AI tracking locks onto subjects while moving'],
      tags:[{t:'5-axis IBIS',c:'pro'},{t:'4K 120fps',c:'pro'},{t:'S-Log3',c:'pro'}]
    },
    {
      cat:'🌅 On-Location Light', icon:'🌡️', lbl:'Godox ML30Bi\nPortable LED Panel',
      name:'Godox ML30Bi portable LED', amazonSearch:'Godox ML30Bi bi-color LED panel',
      priceINR:7000,
      specs:['Pocket-sized bi-color on-camera fill light','USB-C or AA batteries — no power socket needed','Fits in any camera bag'],
      tags:[{t:'Travel portable',c:'pro'},{t:'Bi-color',c:'pro'},{t:'Not studio power',c:'con'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🔭 Wide Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nVlog + Street',
          name:'Sigma 18-50mm f/2.8 travel lens', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
          priceINR:35000,
          specs:['f/2.8 wide open for low-light travel','Compact 290g — barely adds weight'],
          tags:[{t:'f/2.8 low-light',c:'pro'},{t:'290g compact',c:'pro'}]
        },
        {
          cat:'🔍 Zoom Lens', icon:'🔍', lbl:'Sony 18-135mm f/3.5-5.6\nOSS Travel Zoom',
          name:'Sony 18-135mm OSS travel zoom', amazonSearch:'Sony E 18-135mm f3.5-5.6 OSS SEL18135',
          priceINR:35000,
          specs:['202mm equiv. reach · built-in OSS','One lens for wide to tele — no swapping on the go'],
          tags:[{t:'202mm reach',c:'pro'},{t:'OSS stabilised',c:'pro'}]
        }
      ]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Gimbal', icon:'🎬', lbl:'DJI RS 3 Mini\n3-Axis Stabiliser',
          name:'DJI RS 3 Mini', amazonSearch:'DJI RS 3 Mini gimbal stabilizer',
          priceINR:26000,
          specs:['Native vertical for Reels · OLED screen','BT shutter — shoot solo'],
          tags:[{t:'Reels vertical',c:'pro'},{t:'Solo shooting',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['512GB — shoots multi-day trips without laptop dumps'],
          tags:[{t:'512GB capacity',c:'pro'},{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Camera',inr:121000},{lbl:'On-Cam LED',inr:7000},
    {lbl:'Lenses',inr:70000},{lbl:'Gimbal',inr:26000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>✈️ Travel Pro — No studio required:</strong> a6700 IBIS handles handheld shooting. Tiny ML30Bi panel for fill light when needed. Dual lenses cover every focal length. Fits carry-on baggage. No Godox stands, no sandbags, no hassle.'
},

{
  id:'b7', num:'07', topPick:false,
  tags:['travel','budget','sony'],
  label:'Travel Budget', labelIcon:'🎒',
  totalINR:173000, totalClass:'green',
  thumbs:[
    {icon:'🎥',brand:'Sony',name:'ZV-E10 II Body'},
    {icon:'🔍',brand:'Sony',name:'18-135mm OSS'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🤖',brand:'Hohem',name:'iSteady MT2'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'🎥 Camera', icon:'🎥', lbl:'Sony ZV-E10 II\nVlog Camera',
      name:'Sony ZV-E10 II', badge:'Vlog Champion',
      amazonSearch:'Sony ZV-E10 II vlog camera body', priceINR:75000,
      specs:['Identical sensor to a6700 · 4K 60fps 10-bit','Built for travel — lightweight, simple controls','S-Cinetone point-click color for quick travel edits'],
      tags:[{t:'Same sensor as a6700',c:'pro'},{t:'Lightweight',c:'pro'},{t:'No IBIS',c:'con'}]
    },
    {
      cat:'🔍 Main Travel Lens', icon:'🔍', lbl:'Sony 18-135mm f/3.5-5.6\nOSS Travel Zoom',
      name:'Sony 18-135mm OSS', amazonSearch:'Sony E 18-135mm f3.5-5.6 OSS SEL18135',
      priceINR:35000,
      specs:['202mm equiv. · OSS stabilisation · quiet AF','One lens covers everything — monuments to street food'],
      tags:[{t:'202mm reach',c:'pro'},{t:'OSS built-in',c:'pro'},{t:'All-in-one',c:'pro'}]
    },
    {
      cat:'🔭 Wide Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nVlog Lens',
      name:'Sigma 18-50mm f/2.8 vlog lens', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
      priceINR:35000,
      specs:['f/2.8 for low-light cafes, markets, interiors','290g — barely notice it in the bag'],
      tags:[{t:'f/2.8 low-light',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🤖 AI Gimbal', icon:'🤖', lbl:'Hohem iSteady MT2\nAI Vision Tracking',
          name:'Hohem iSteady MT2', amazonSearch:'Hohem iSteady MT2 AI gimbal stabilizer',
          priceINR:25000,
          specs:['<strong>AI tracks you automatically</strong> — no crew needed','17hr battery · multi-device (camera + phone + GoPro)'],
          tags:[{t:'AI auto-track',c:'pro'},{t:'17hr battery',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['512GB — days of footage without offloading'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Camera',inr:75000},{lbl:'18-135mm',inr:35000},
    {lbl:'18-50mm',inr:35000},{lbl:'Gimbal AI',inr:25000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Travel Budget — No lights needed:</strong> ZV-E10 II + dual Sony lenses covers every travel shot. AI gimbal tracks solo. Under ₹1.75L with zero studio gear weighing you down.'
},

{
  id:'b8', num:'08', topPick:false,
  tags:['travel','budget'],
  label:'Fuji Travel', labelIcon:'🎞️',
  totalINR:206000, totalClass:'amber',
  thumbs:[
    {icon:'🎞️',brand:'Fujifilm',name:'X-S20 + 16-50mm'},
    {icon:'🔍',brand:'Fujifilm',name:'XF 18-120mm PZ'},
    {icon:'🎬',brand:'DJI',name:'RS 3 Mini'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'🎞️ Camera', icon:'🎞️', lbl:'Fujifilm X-S20\n+ 16-50mm Kit',
      name:'Fujifilm X-S20 kit', badge:'Best Colors',
      amazonSearch:'Fujifilm X-S20 mirrorless camera 16-50mm kit', priceINR:157000,
      specs:['<strong>Film Simulations</strong> — point-click gorgeous color for travel content','6.2K → 4K 10-bit F-Log2 · 5-axis IBIS · EVF','f/2.8 kit lens covers wide travel shots'],
      tags:[{t:'Film Simulations',c:'pro'},{t:'IBIS + EVF',c:'pro'},{t:'f/2.8 included',c:'pro'}]
    },
    {
      cat:'🔍 Travel Zoom', icon:'🔍', lbl:'Fujifilm XF 18-120mm\nf/4 Power Zoom',
      name:'Fujifilm XF 18-120mm power zoom', amazonSearch:'Fujifilm XF 18-120mm f4 LM PZ lens',
      priceINR:65000,
      specs:['<strong>27–183mm equiv.</strong> — travel to wildlife','Power zoom for cinematic zoom-in/out pulls on video'],
      tags:[{t:'Power zoom',c:'pro'},{t:'183mm reach',c:'pro'},{t:'Pricey',c:'con'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Gimbal', icon:'🎬', lbl:'DJI RS 3 Mini\n3-Axis Stabiliser',
          name:'DJI RS 3 Mini', amazonSearch:'DJI RS 3 Mini gimbal stabilizer',
          priceINR:26000,
          specs:['Handles X-S20 + kit lens · Reels vertical'],
          tags:[{t:'Reels vertical',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['Required for Fuji All-Intra video formats'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Cam+Kit Lens',inr:157000},{lbl:'XF Zoom',inr:65000},
    {lbl:'Gimbal',inr:26000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Fuji Travel — No lights needed:</strong> Film Simulation aesthetic makes your travel content instantly recognizable. XF 18-120mm power zoom for cinematic shots. Slightly over ₹2L — skip XF zoom initially and use kit lens to stay in budget.'
},

// ══════════════════════════════════════════════════════
// WILDLIFE / NATURE BASKETS
// ══════════════════════════════════════════════════════

{
  id:'b9', num:'09', topPick:false,
  ribbon:'🦋 WILDLIFE SPECIAL — 525mm Equivalent Reach',
  tags:['wildlife','travel','pro','sony'],
  label:'Wildlife Pro', labelIcon:'🦋',
  totalINR:248000, totalClass:'amber',
  thumbs:[
    {icon:'📷',brand:'Sony',name:'a6700 Body'},
    {icon:'🔍',brand:'Sony',name:'70-350mm G OSS'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🎬',brand:'DJI',name:'RS 3 Mini'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'📷 Camera', icon:'📷', lbl:'Sony Alpha a6700\nAPS-C Mirrorless',
      name:'Sony a6700 wildlife camera', badge:'AF Champion',
      amazonSearch:'Sony Alpha a6700 body', priceINR:121000,
      specs:['AI subject tracking — locks onto birds mid-flight','<strong>4K 120fps</strong> captures fast-moving animals in slow motion','5-axis IBIS reduces camera shake on long lenses'],
      tags:[{t:'AI bird tracking',c:'pro'},{t:'4K 120fps',c:'pro'},{t:'IBIS',c:'pro'}]
    },
    {
      cat:'🔍 Wildlife Tele Lens', icon:'🔍', lbl:'Sony E 70-350mm\nf/4.5-6.3 G OSS',
      name:'Sony E 70-350mm G OSS telephoto', amazonSearch:'Sony E 70-350mm f4.5-6.3 G OSS SEL70350G',
      priceINR:65000,
      specs:['<strong>525mm equivalent reach</strong> — serious wildlife photography','G-series optical quality · built-in OSS','Fast quiet AF tracks birds in flight'],
      tags:[{t:'525mm equiv.',c:'pro'},{t:'G-series quality',c:'pro'},{t:'Bird AF',c:'pro'}]
    },
    {
      cat:'🔭 Wide Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nWide + Street',
      name:'Sigma 18-50mm f/2.8 wide lens', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
      priceINR:35000,
      specs:['Wide-angle for landscape and habitat shots','290g — balance with tele in the bag'],
      tags:[{t:'Landscape wide',c:'pro'},{t:'Low-light f/2.8',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Gimbal', icon:'🎬', lbl:'DJI RS 3 Mini\n3-Axis Stabiliser',
          name:'DJI RS 3 Mini', amazonSearch:'DJI RS 3 Mini gimbal stabilizer',
          priceINR:26000,
          specs:['2kg payload for Sigma 18-50mm combo on the go'],
          tags:[{t:'2kg payload',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['512GB — long safari days without offloading'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Camera',inr:121000},{lbl:'70-350mm G',inr:65000},
    {lbl:'18-50mm',inr:35000},{lbl:'Gimbal',inr:26000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Wildlife Pro — No lights:</strong> Sony 70-350mm G reaches 525mm equivalent — birds, tigers, deer from a distance. a6700 AI tracking locks on moving animals. No studio gear — pure field kit.'
},

// ══════════════════════════════════════════════════════
// SOLO / REELS BASKETS
// ══════════════════════════════════════════════════════

{
  id:'b10', num:'10', topPick:false,
  ribbon:'🤳 SOLO CREATOR — AI Tracks You. No Crew Needed.',
  tags:['solo','travel','budget','sony'],
  label:'Solo AI Vlogger', labelIcon:'🤳',
  totalINR:183000, totalClass:'green',
  thumbs:[
    {icon:'🎥',brand:'Sony',name:'ZV-E10 II Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🔍',brand:'Sony',name:'18-135mm OSS'},
    {icon:'🤖',brand:'Hohem',name:'iSteady MT2'},
    {icon:'💾',brand:'SanDisk',name:'512GB Extreme'},
  ],
  products:[
    {
      cat:'🎥 Camera', icon:'🎥', lbl:'Sony ZV-E10 II\nVlog Camera',
      name:'Sony ZV-E10 II vlog camera', badge:'Solo Champion',
      amazonSearch:'Sony ZV-E10 II vlog camera body', priceINR:75000,
      specs:['Same sensor as a6700 · 4K 60fps 10-bit','S-Cinetone = great color point-and-shoot','Lightest Sony mirrorless — balances perfectly on MT2'],
      tags:[{t:'Same sensor as a6700',c:'pro'},{t:'10-bit video',c:'pro'},{t:'Lightest Sony',c:'pro'}]
    },
    {
      cat:'🔭 Vlog Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nVlog Lens',
      name:'Sigma 18-50mm f/2.8 vlog', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
      priceINR:35000,
      specs:['f/2.8 wide — you stay sharp, background blurs','290g — AI gimbal tracks you perfectly at this weight'],
      tags:[{t:'f/2.8 bokeh',c:'pro'},{t:'Lightweight',c:'pro'}]
    },
    {
      cat:'🔍 Zoom Lens', icon:'🔍', lbl:'Sony 18-135mm OSS\nTravel + Zoom',
      name:'Sony 18-135mm OSS zoom lens', amazonSearch:'Sony E 18-135mm f3.5-5.6 OSS SEL18135',
      priceINR:35000,
      specs:['Swap for travel shots or when you need reach','OSS for handheld without gimbal'],
      tags:[{t:'202mm reach',c:'pro'},{t:'OSS',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🤖 AI Tracking Gimbal', icon:'🤖', lbl:'Hohem iSteady MT2\nAI Vision Tracking',
          name:'Hohem iSteady MT2 AI gimbal', amazonSearch:'Hohem iSteady MT2 AI gimbal stabilizer',
          priceINR:25000,
          specs:['<strong>AI Vision tracks face + body automatically</strong>','17hr battery · tracks phone + GoPro too','Selfie mode + portrait mode built in'],
          tags:[{t:'AI auto-track',c:'pro'},{t:'17hr battery',c:'pro'},{t:'Solo creator',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB\nExtreme Pro UHS-I',
          name:'SanDisk 512GB Extreme Pro UHS-I', amazonSearch:'SanDisk 512GB Extreme Pro SDXC UHS-I V30',
          priceINR:8000,
          specs:['200MB/s — sufficient for ZV-E10 II 4K 60fps','Best value storage for budget builds'],
          tags:[{t:'V30 UHS-I',c:'pro'},{t:'Best value',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Camera',inr:75000},{lbl:'18-50mm',inr:35000},
    {lbl:'18-135mm',inr:35000},{lbl:'AI Gimbal',inr:25000},{lbl:'512GB SD',inr:8000}
  ],
  verdict:'<strong>Solo AI Vlogger — No lights:</strong> Hohem MT2 AI tracks you while you talk to camera — no tripod operator needed. ZV-E10 II + dual lenses covers every shot. Best complete solo kit under ₹1.85L.'
},

{
  id:'b11', num:'11', topPick:false,
  tags:['solo','budget'],
  label:'Budget Solo Canon', labelIcon:'🎯',
  totalINR:163000, totalClass:'green',
  thumbs:[
    {icon:'🎥',brand:'Canon',name:'EOS R50 Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8 RF'},
    {icon:'🤖',brand:'Hohem',name:'iSteady MT2'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'🎥 Camera', icon:'🎥', lbl:'Canon EOS R50\nBeginner Mirrorless',
      name:'Canon EOS R50', badge:'AF King',
      amazonSearch:'Canon EOS R50 mirrorless camera body', priceINR:55000,
      specs:['<strong>Dual Pixel CMOS AF II</strong> — tracks subjects better than any other beginner camera','4K 30fps · 1080p 60fps · lightest RF body','Easiest autofocus for fashion + clothing shoots'],
      tags:[{t:'Legendary AF',c:'pro'},{t:'Lightest body',c:'pro'},{t:'4K 30fps only',c:'con'}]
    },
    {
      cat:'🔭 Studio Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nRF-S Mount',
      name:'Sigma 18-50mm f/2.8 Canon RF', amazonSearch:'Sigma 18-50mm f2.8 DC DN Canon RF mount',
      priceINR:45000,
      specs:['f/2.8 constant on Canon RF system','Beautiful bokeh for clothing and portraits'],
      tags:[{t:'f/2.8 constant',c:'pro'},{t:'RF native',c:'pro'}]
    },
    {
      cat:'🤖 AI Tracking Gimbal', icon:'🤖', lbl:'Hohem iSteady MT2\nAI Vision Tracking',
      name:'Hohem iSteady MT2', amazonSearch:'Hohem iSteady MT2 AI gimbal stabilizer',
      priceINR:25000,
      specs:['AI tracks you while you vlog solo','Works with phone + camera + GoPro'],
      tags:[{t:'AI auto-track',c:'pro'},{t:'Multi-device',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['V90 future-proofs storage — zero buffer lag'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        },
        {
          cat:'🌅 On-Camera Fill', icon:'🌡️', lbl:'Godox ML30Bi\nPocket LED Panel',
          name:'Godox ML30Bi LED panel', amazonSearch:'Godox ML30Bi bi-color LED panel',
          priceINR:7000,
          specs:['Tiny pocket panel for indoor vlog fill light','USB-C powered from power bank'],
          tags:[{t:'Pocket portable',c:'pro'},{t:'USB-C',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Camera',inr:55000},{lbl:'Sigma RF Lens',inr:45000},
    {lbl:'AI Gimbal',inr:25000},{lbl:'512GB V90',inr:23000},{lbl:'LED Panel',inr:7000}
  ],
  verdict:'<strong>Budget Solo Canon — No studio lights:</strong> Canon R50 legendary autofocus + Hohem AI tracking = easiest setup for beginners. Under ₹1.65L. Add a studio light set later as you grow.'
},

// ══════════════════════════════════════════════════════
// ADVANCED / HYBRID BASKETS
// ══════════════════════════════════════════════════════

{
  id:'b12', num:'12', topPick:false,
  tags:['studio','travel','pro','sony'],
  label:'Full Hybrid', labelIcon:'🎬',
  totalINR:268000, totalClass:'amber',
  thumbs:[
    {icon:'💡',brand:'Godox ×2',name:'SL100D LED'},
    {icon:'📷',brand:'Sony',name:'a6700 Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🔍',brand:'Sony',name:'18-135mm OSS'},
    {icon:'🤖',brand:'Hohem',name:'iSteady MT2'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'💡 Studio Lights', icon:'💡', lbl:'Godox SL100D ×2\n90cm Octa Softbox',
      name:'Godox SL100D LED studio light', amazonSearch:'Godox SL100D LED Video Light',
      priceINR:28000,
      specs:['100W continuous LED CRI 96+ Bowens mount','Seamless video + photo workflow'],
      tags:[{t:'Continuous video',c:'pro'},{t:'CRI 96+',c:'pro'}]
    },
    {
      cat:'📷 Camera', icon:'📷', lbl:'Sony Alpha a6700\nAPS-C Mirrorless',
      name:'Sony a6700 mirrorless body', amazonSearch:'Sony Alpha a6700 body',
      priceINR:121000,
      specs:['4K 120fps 10-bit 5-axis IBIS S-Log3','AI tracking for solo + fashion + wildlife'],
      tags:[{t:'Best video APS-C',c:'pro'},{t:'IBIS',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🔭 Studio Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nDC DN Sony E',
          name:'Sigma 18-50mm f/2.8 lens', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
          priceINR:35000,
          specs:['f/2.8 constant studio bokeh'],
          tags:[{t:'f/2.8 constant',c:'pro'}]
        },
        {
          cat:'🔍 Travel Lens', icon:'🔍', lbl:'Sony 18-135mm OSS\nTravel Zoom',
          name:'Sony 18-135mm OSS travel zoom', amazonSearch:'Sony E 18-135mm f3.5-5.6 OSS SEL18135',
          priceINR:35000,
          specs:['202mm reach OSS stabilisation'],
          tags:[{t:'202mm reach',c:'pro'}]
        }
      ]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🤖 AI Gimbal', icon:'🤖', lbl:'Hohem iSteady MT2\nAI Vision Tracking',
          name:'Hohem iSteady MT2 AI gimbal', amazonSearch:'Hohem iSteady MT2 AI gimbal stabilizer',
          priceINR:25000,
          specs:['AI auto-tracks solo · 17hr battery','Studio + travel + solo in one gimbal'],
          tags:[{t:'AI auto-track',c:'pro'},{t:'17hr battery',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['V90 handles every recording mode'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Lights',inr:28000},{lbl:'Camera',inr:121000},
    {lbl:'Lenses',inr:70000},{lbl:'AI Gimbal',inr:25000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Full Hybrid:</strong> Studio lights for indoor shoots. Dual lenses for travel. AI gimbal for solo content. One setup, every use case covered under ₹2.7L.'
},

{
  id:'b13', num:'13', topPick:false,
  tags:['wildlife','travel','pro','sony'],
  label:'Wildlife + Location', labelIcon:'🌍',
  totalINR:285000, totalClass:'amber',
  thumbs:[
    {icon:'⚡',brand:'Godox',name:'AD100Pro Flash ×2'},
    {icon:'📷',brand:'Sony',name:'a6700 Body'},
    {icon:'🔍',brand:'Sony',name:'70-350mm G OSS'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'⚡ Location Flash', icon:'⚡', lbl:'Godox AD100Pro ×2\nPortable Battery Flash',
      name:'Godox AD100Pro portable flash', amazonSearch:'Godox AD100Pro portable strobe flash',
      priceINR:30000,
      specs:['<strong>100Ws battery-powered flash</strong> — studio quality anywhere outdoors','Works at golden hour, forest, beach — no power socket','2.4G wireless X system'],
      tags:[{t:'Battery powered',c:'pro'},{t:'Location ready',c:'pro'},{t:'Not for video',c:'con'}]
    },
    {
      cat:'📷 Camera', icon:'📷', lbl:'Sony Alpha a6700\nAPS-C Mirrorless',
      name:'Sony a6700 body', amazonSearch:'Sony Alpha a6700 body',
      priceINR:121000,
      specs:['AI tracking for wildlife + 4K 120fps','5-axis IBIS for outdoor handheld'],
      tags:[{t:'AI wildlife AF',c:'pro'},{t:'IBIS',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🔍 Wildlife Tele', icon:'🔍', lbl:'Sony 70-350mm G OSS\n525mm Equiv.',
          name:'Sony 70-350mm G OSS telephoto lens', amazonSearch:'Sony E 70-350mm f4.5-6.3 G OSS SEL70350G',
          priceINR:65000,
          specs:['525mm equiv. · G-series · OSS','Fast quiet AF for birds + animals'],
          tags:[{t:'525mm reach',c:'pro'},{t:'G-series',c:'pro'}]
        },
        {
          cat:'🔭 Wide Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nLandscape + Portrait',
          name:'Sigma 18-50mm f/2.8 wide lens', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
          priceINR:35000,
          specs:['Wide landscape + environmental portraits'],
          tags:[{t:'f/2.8 wide',c:'pro'}]
        }
      ]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Gimbal', icon:'🎬', lbl:'DJI RS 3 Mini\n3-Axis Stabiliser',
          name:'DJI RS 3 Mini', amazonSearch:'DJI RS 3 Mini gimbal stabilizer',
          priceINR:26000,
          specs:['2kg payload for Sigma combo'],
          tags:[{t:'Compact',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['512GB for long field days'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Location Flash',inr:30000},{lbl:'Camera',inr:121000},
    {lbl:'Lenses',inr:100000},{lbl:'Gimbal',inr:26000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Wildlife + Location Master:</strong> Battery flash for outdoor shoots not tied to power sockets. Sony 70-350mm G reaches 525mm for serious wildlife. No studio required — shoot anywhere.'
},

{
  id:'b14', num:'14', topPick:false,
  tags:['solo','studio','budget'],
  label:'Instagram Reels Specialist', labelIcon:'📱',
  totalINR:167000, totalClass:'green',
  thumbs:[
    {icon:'📷',brand:'Sony',name:'a6700 Body'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🤖',brand:'Hohem',name:'iSteady MT2'},
    {icon:'💡',brand:'Godox',name:'ML30Bi LED'},
    {icon:'💾',brand:'SanDisk',name:'256GB V60'},
  ],
  products:[
    {
      cat:'📷 Camera', icon:'📷', lbl:'Sony a6700\nReels Ready',
      name:'Sony a6700 mirrorless', amazonSearch:'Sony Alpha a6700 body',
      priceINR:121000,
      specs:['<strong>Native 4K vertical video</strong> compatible','S-Cinetone = color pops on Reels without grading','AI tracking keeps you in frame while moving'],
      tags:[{t:'AI tracking',c:'pro'},{t:'Vertical video',c:'pro'}]
    },
    {
      cat:'🔭 Reels Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nPerfect Vlog Focal',
      name:'Sigma 18-50mm f/2.8 reels', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
      priceINR:35000,
      specs:['27mm wide = perfect for self-facing vlog shot','f/2.8 blurs background on Reels'],
      tags:[{t:'Perfect vlog focal',c:'pro'},{t:'f/2.8 bokeh',c:'pro'}]
    },
    {
      cat:'🤖 AI Gimbal', icon:'🤖', lbl:'Hohem iSteady MT2\nAI Tracking Vertical',
      name:'Hohem iSteady MT2 vertical gimbal', amazonSearch:'Hohem iSteady MT2 AI gimbal stabilizer',
      priceINR:25000,
      specs:['Native vertical mode for Reels','AI tracking so you can move freely while it follows'],
      tags:[{t:'Native vertical',c:'pro'},{t:'AI auto-track',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'💡 Fill Light', icon:'🌡️', lbl:'Godox ML30Bi\nPocket LED Panel',
          name:'Godox ML30Bi on-camera light', amazonSearch:'Godox ML30Bi bi-color LED panel',
          priceINR:7000,
          specs:['Pocket fill light clips to camera or stand','USB-C powered — use from power bank outdoors'],
          tags:[{t:'Pocket portable',c:'pro'},{t:'Bi-color',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 256GB V60\nExtreme Pro UHS-II',
          name:'SanDisk 256GB V60 UHS-II', amazonSearch:'SanDisk 256GB Extreme Pro SDXC V60 UHS-II',
          priceINR:12000,
          specs:['V60 UHS-II — handles a6700 comfortably','256GB for weeks of Reels content'],
          tags:[{t:'V60 UHS-II',c:'pro'},{t:'Value pick',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Camera',inr:121000},{lbl:'Sigma Lens',inr:35000},
    {lbl:'AI Gimbal',inr:25000},{lbl:'ML30Bi Light',inr:7000},{lbl:'256GB V60',inr:12000}
  ],
  verdict:'<strong>Instagram Reels Specialist:</strong> a6700 + Hohem AI vertical tracking + Sigma f/2.8 = the perfect Reels machine. AI gimbal tracks you automatically while you walk and talk. Under ₹2L.'
},

{
  id:'b15', num:'15', topPick:false,
  tags:['studio','travel','pro','sony'],
  label:'Complete Pro Kit', labelIcon:'🎯',
  totalINR:292000, totalClass:'amber',
  thumbs:[
    {icon:'💡',brand:'Godox ×2',name:'SL100D LED'},
    {icon:'📷',brand:'Sony',name:'a6700 Body'},
    {icon:'🔍',brand:'Sony',name:'70-350mm G OSS'},
    {icon:'🔭',brand:'Sigma',name:'18-50mm f/2.8'},
    {icon:'🎬',brand:'Zhiyun',name:'Weebill 3'},
    {icon:'💾',brand:'SanDisk',name:'512GB V90'},
  ],
  products:[
    {
      cat:'💡 Studio Lights', icon:'💡', lbl:'Godox SL100D ×2\n90cm Octa Softbox',
      name:'Godox SL100D LED video light', amazonSearch:'Godox SL100D LED Video Light',
      priceINR:28000,
      specs:['100W continuous LED CRI 96+ Bowens mount','Full studio setup for professional shoots'],
      tags:[{t:'Studio ready',c:'pro'},{t:'CRI 96+',c:'pro'}]
    },
    {
      cat:'📷 Camera', icon:'📷', lbl:'Sony Alpha a6700\nAPS-C Mirrorless',
      name:'Sony a6700 camera', amazonSearch:'Sony Alpha a6700 body',
      priceINR:121000,
      specs:['4K 120fps 10-bit S-Log3 · 5-axis IBIS','AI tracking for every shooting situation'],
      tags:[{t:'Best video APS-C',c:'pro'},{t:'IBIS',c:'pro'}]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🔍 Wildlife Tele', icon:'🔍', lbl:'Sony 70-350mm G OSS\n525mm Wildlife',
          name:'Sony E 70-350mm G telephoto', amazonSearch:'Sony E 70-350mm f4.5-6.3 G OSS SEL70350G',
          priceINR:65000,
          specs:['525mm equiv. G-series wildlife telephoto','Fast AF for birds and animals'],
          tags:[{t:'525mm reach',c:'pro'},{t:'G-series',c:'pro'}]
        },
        {
          cat:'🔭 Studio Lens', icon:'🔭', lbl:'Sigma 18-50mm f/2.8\nDC DN Sony E',
          name:'Sigma 18-50mm f/2.8 studio', amazonSearch:'Sigma 18-50mm f2.8 DC DN Sony E mount',
          priceINR:35000,
          specs:['f/2.8 constant · bokeh for studio + street'],
          tags:[{t:'f/2.8 constant',c:'pro'}]
        }
      ]
    },
    {
      type:'lens-pair', lenses:[
        {
          cat:'🎬 Pro Gimbal', icon:'🎬', lbl:'Zhiyun Weebill 3\n3kg Payload',
          name:'Zhiyun Weebill 3 gimbal', amazonSearch:'Zhiyun Weebill 3 camera gimbal',
          priceINR:30000,
          specs:['<strong>3kg payload</strong> — handles heavy tele lenses','Built-in fill light + mic mount','Future-proof for full-frame upgrade'],
          tags:[{t:'3kg payload',c:'pro'},{t:'Future-proof',c:'pro'},{t:'Built-in light',c:'pro'}]
        },
        {
          cat:'💾 Storage', icon:'💾', lbl:'SanDisk 512GB V90\nExtreme Pro UHS-II',
          name:'SanDisk 512GB Extreme Pro V90', amazonSearch:'SanDisk 512GB Extreme Pro SDXC V90 UHS-II',
          priceINR:23000,
          specs:['300MB/s · handles every a6700 codec'],
          tags:[{t:'V90 UHS-II',c:'pro'}]
        }
      ]
    }
  ],
  budgetRow:[
    {lbl:'Lights',inr:28000},{lbl:'Camera',inr:121000},
    {lbl:'Lenses',inr:100000},{lbl:'Weebill 3',inr:30000},{lbl:'512GB V90',inr:23000}
  ],
  verdict:'<strong>Complete Pro Kit:</strong> Studio lights + Sony 70-350mm G wildlife tele + Sigma 18-50mm f/2.8 + Weebill 3 handles 3kg lenses. Every use case covered in one kit. The most comprehensive setup on this list.'
}

];

window.GUIDE_DATA = [
  {icon:'🏆', title:'Best single setup — covers everything', desc:'→ <strong>Basket 1</strong> — Sony a6700 + dual lenses + Godox SL100D. Studio, travel and nature in one kit.', link:'#b1'},
  {icon:'✈️', title:'Travel vlogging — no studio gear', desc:'→ <strong>Basket 6</strong> — a6700 + dual lenses + small portable panel. Fits carry-on, no heavy stands.', link:'#b6'},
  {icon:'💰', title:'Best travel vlog under budget', desc:'→ <strong>Basket 7</strong> — ZV-E10 II + Sony 18-135mm + Hohem AI. Under ₹1.75L, no lights needed.', link:'#b7'},
  {icon:'🦋', title:'Wildlife and nature photography', desc:'→ <strong>Basket 9</strong> — a6700 + Sony 70-350mm G OSS. 525mm equivalent reach for birds and animals.', link:'#b9'},
  {icon:'🤳', title:'Solo creator — AI tracks you automatically', desc:'→ <strong>Basket 10</strong> — ZV-E10 II + Hohem MT2 AI. No crew. It follows you while you film.', link:'#b10'},
  {icon:'📸', title:'Studio only — maximum photo quality', desc:'→ <strong>Basket 2</strong> or <strong>Basket 3</strong> — Studio purist with f/2.8 bokeh. Or strobe power for fabric freeze shots.', link:'#b2'},
  {icon:'💡', title:'Cheapest complete studio setup', desc:'→ <strong>Basket 4</strong> — ZV-E10 II + Godox SL60IID + Sigma f/2.8. Professional 10-bit under ₹1.75L.', link:'#b4'},
  {icon:'🎞️', title:'Fujifilm signature color look', desc:'→ <strong>Basket 5</strong> or <strong>Basket 8</strong> — Film Simulations look that no Sony can replicate.', link:'#b5'},
  {icon:'📱', title:'Instagram Reels specialist', desc:'→ <strong>Basket 14</strong> — a6700 + Sigma f/2.8 + Hohem vertical AI tracking. Built for Reels.', link:'#b14'},
  {icon:'🎯', title:'Most complete kit — every use case', desc:'→ <strong>Basket 15</strong> — Studio + 525mm wildlife tele + Weebill 3 pro gimbal. The full pro bundle.', link:'#b15'},
];
