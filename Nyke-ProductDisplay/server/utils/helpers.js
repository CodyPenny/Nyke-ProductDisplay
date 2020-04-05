function randomGender() {
    let index = Math.floor(Math.random() * 3);
    let genders =['male', 'female', 'unisex'];
    return genders[index]
}

function randomType(sex) {
  if (sex === 'male') {
      return 'Men Shoe'
  }
  if (sex === 'female') {
      return 'Women Shoe'
  }
  return 'Unisex Shoe'
}
const femaleColors = [
    ["Black","True Berry","White","Pink Blast"],
    ["Laser Crimson","Platinum Tint","Track Red","White"],
    ["Black","Thunder Grey","White"],
    ["Echo Pink","Metallic Red Bronze","Oil Grey","Metallic Red Bronze"],
    ["Phantom","Barely Volt","Spruce Aura","Bio Beige"],
    ["White","Summit White","Laser Fuchsia","Psychic Purple"],
    ["Pumice","Vast Grey","Celestial Gold","Pink Quartz"],
    ["Ocean Cube","Pure Platinum","White","Metallic Cool Grey"],
    ["Black","Half Blue","White","Light Blue"],
    ["Plum Chalk","Infinite Gold","Silver Lilac","Metallic Gold"],
    ["True Berry","Vast Grey","Pink Blast","Black"],
    ["Stone Mauve","Barely Rose","Smokey Mauve","Metallic Red Bronze"],
    ["White","Black","Iced Lilac","Noble Red"],
    ["Black","Photon Dust","Valerian Blue","Vivid Purple"],
    ["Light Redwood","Pink Quartz","White"],
    ["Cool Grey","Wolf Grey","White","Metallic Platinum"],
    ["Wolf Grey","Cool Grey","Ocean Cube","Metallic Cool Grey"],
    ["Black","Valerian Blue","Vivid Purple"],
    ["Ocean Cube", "Pure Platinum","Metallic Cool Grey"],
    ["Half Blue","White","Black"],
    ["Pure Platinum","Lava Glow","Summit White"],
    ["Pure Platinum","White","Yellow Pulse","Psychic Purple"],
    ["Half Blue","White","Black"], ["White","Black","Atomic Violet","Night Maroon"],
    ["Aura","Mint Foam", "Speed Yellow", "Blackened Blue"],
    ["Pistachio Frost","White","Black"],
    ["White","Washed Coral","Hyper Blue","Multi-Color"],
    ["Fossil","Black","Pistachio Frost","White"],
    ["Black","Cosmic Fuchsia","Limelight","Hyper Pink"],
    ["Laser Crimson","Light Smoke Grey","Photon Dust","White"],
    ["Atmosphere Grey","Thunder Grey","Vast Grey"],
    ["Aura","Light Armory Blue","Mint Foam","Blackened Blue"],
    ["Light Orewood Brown","Black","Villain Red","Hyper Crimson"],
    ["Beechtree","Cargo Khaki","Bright Crimson","Off Noir"],
    ["Oil Grey","Black","Wolf Grey","Barely Grey"],
    ["Dune Red","Mahogany","Team Orange","Burgundy Ash"],
    ["Black","Light Thistle","Pollen Rise","Magic Flamingo"],
    ["Anthracite","Barely Grey","White","Black"],
    ["Team Red","White","Gum Light Brown","Team Red"],
    ["Black","White","University Blue","Black"],
    ["Cosmic Clay","Blue Hero","Sail","Black"],
    ["Black","Racer Blue","Atmosphere Grey","Black"],
    ["Volt","White","Gum Light Brown","Volt"],
    ["Sky Grey","Vast Grey","Obsidian Mist","Particle Grey"],
    ["Phantom","Light Bone","Black"],
    ["Black","Thunder Grey","Light Carbon","Bright Ceramic"],
    ["Black","Red Orbit","Light Photo Blue","Metallic Gold"],
    ["Black","Anthracite","Pink Blast","Black"],
    ["Dark Grey","Pure Platinum","Anthracite","Bright Crimson"],
  ];

  const reactVariants = ['A.I.R', 'ENG', 'Vision', 'Element 55', 'Element 87', 'Presto', 'HyperSet', 'Element 55', 'Sertu', 'Ianga', 'Terra Globe', 'HyperSet', 'Infinity Run', 'JoyRide CC', 'Type GTX', 'AMP', 'VaporMax', 'Max', 'Flyknit', 'Sage', 'Force', 'Plus', 'Shadow', 'Daybreak', 'Dia', 'Duo', 'Ultra', 'Vista', 'Grind', 'Cortez', 'LX', 'Vintage', 'Premium', 'Benassi', 'Jewel', 'Offcourt', 'Tailwind', 'IV', 'FlyEase', 'Mid', 'Element', 'Light', 'Ease', 'Graviton', 'Racer', 'Tailwind', 'Classic', 'Retro High', 'One', 'Rift', 'Clash', 'Slip', 'Royale', 'Nova', 'Wide', 'Triax', 'Oketo', 'Presto', 'Solarsoft', 'Turbo', 'Miami', 'Wildhorse', 'Pegasus', 'Kiger', 'Structure', 'Cruz', 'Rival', 'Dual', 'Shield', 'Winflo', 'Vomero'];

function randomVariant() {
    let index = Math.floor(Math.random() * reactVariants.length);
    return reactVariants[index];
}

function randomStyle() {
    let index = Math.floor(Math.random() * femaleColors.length);
    return femaleColors[index];
}

function randomWeight() {
    let weight = Number.parseFloat(Math.random() * (20 - 10) + 10).toPrecision(4);
    return weight
}

function randomSizes(sex) {
    let availSizesObj =  {
        '5': null,
        '5x5': null,
        '6': null,
        '6x5': null,
        '7': null,
        '7x5': null,
        '8': null,
        '8x5': null,
        '9': null,
        '9x5': null,
        '10': null,
        '10x5': null,
        '11': null,
        '11x5': null,
        '12': null,
        '12x5': null,
        '13': null,
        '13x5': null,
        '14': null,
        '15': null,
        '16': null,
        '17': null,
        '18': null
      };

      let randoSize = {}
      if(sex == 'male'){
        for(let size in availSizesObj){
          if(size != '5' &&
            size != '5x5' &&
            size != '6' &&
            size != '6x5' &&
            size != '14' &&
            size != '15' &&
            size != '16' &&
            size != '17' &&
            size != '18'){
            randoSize[size] = Math.random() >= 0.3
          } else {
            randoSize[size] = false
          }
        }
      }
      if(sex ==  'female'){
        for(let size in availSizesObj){
          if(size != '12' &&
             size != '12x5' &&
             size != '13' &&
             size != '13x5' &&
             size != '14' &&
             size != '15' &&
             size != '16' &&
             size != '17' &&
             size != '18'){
            randoSize[size] = Math.random() >= 0.3
          } else {
            randoSize[size] = false
          }
        }
      }
      if(sex == 'unisex'){
        for(let size in availSizesObj){
          if(size != '14' && size != '15' && size != '16' && size != '17' && size != '18'){
            randoSize[size] = Math.random() >= 0.3
           } else {
             randoSize[size] = false
           }
        }
      }
      return randoSize;   
}

const players = [
    [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/znfif7ia3eu2oosdlrbv/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zlt5i9rqr6cjiam8n76h/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/oeddmivmlxkucqqpbo9h/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zyxtxgzg3k4xjbnkxejs/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/hfzo8ma3kqnyg8iguqdd/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/gyycliiiwuorvsjpvth4/free-rn-flyknit-3-womens-running-shoe-TSXbz2.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/bfp1kgjrsic4ikovn3ac/custom-nike-free-rn-5.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/us91clopczmceutlv817/custom-nike-free-rn-5.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/jyuxglqstqqnmaqjhbhk/custom-nike-free-rn-5.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/qpn3jaedpnixz7caxrns/custom-nike-free-rn-5.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ikphqpnquzrcfggbeut6/custom-nike-free-rn-5.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fr4wgw97a6nud221ki2q/custom-nike-free-rn-5.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/k8bokr1btm6yoofuwmyr/custom-nike-free-rn-5.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/pllreyrjt8klklnvmde7/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
        "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0.89/zey6vuqpj4zxw76kuxye/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/ttvpr7emwalmb6uaghn2/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/sfylmnvk7xdplpz6wcmu/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/acywmtdwxncro3fr0pl6/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/r9mz0al9fpftyz1s2ngq/free-rn-flyknit-3-nrg-mens-running-shoe-RBSCsl.jpg"
      ],
      [
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ylhx3vwhcimfdx02cj1r/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/qer4zbnagxftafyqmtjj/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/nazn3ok5tcdeimx5zhsj/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ymmgwxh50kurwisf4svx/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/mdoxa2j7dylhdztcotgz/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/xkuwa410nhwjuaerkw7y/free-rn-motion-flyknit-2018-mens-running-shoe-L0LA7L.jpg"
      ],
      [
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/cewfz9irjyd6k6ey3i8f/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg",
        "https://static.nike.com/a/videos/q_90,vc_vp9/nvrljfhxq2qcifdqkpxp/video.webm",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/u59voktzpq3n2ohdeqpb/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/zqnrxypt5y054pzushte/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/nu6faafdwhbuv5cbngdf/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/vygoaauuhzeqefpf6h1o/free-rn-flyknit-2018-womens-running-shoe-2Xz32l.jpg"
      ],
      [
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/sswsnaybhivqhzl8dfgw/free-rn-2018-womens-running-shoe-zE8Je3.jpg",
        "https://static.nike.com/a/videos/q_90,vc_vp9/zeeotsjoyjztmvtesuxi/video.webm",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ydfqyibyos24uiqtsy7j/free-rn-2018-womens-running-shoe-zE8Je3.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/mtt54aal8vmxnxb5i7gr/free-rn-2018-womens-running-shoe-zE8Je3.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/p9ljpztwgw1qhwjjuwg3/free-rn-2018-womens-running-shoe-zE8Je3.jpg",
        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/emryac2t11donc1q8p35/free-rn-2018-womens-running-shoe-zE8Je3.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/26f390c7-6e1d-417b-b465-1286c63f9e11/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/e797b4e9-6a2f-46d6-9077-0ca5883ac568/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/03a94c43-d574-424c-a5d4-70e58b6ad00b/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/15371222-c9f9-4112-a459-4d391ae89e96/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/03a94c43-d574-424c-a5d4-70e58b6ad00b/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/15371222-c9f9-4112-a459-4d391ae89e96/custom-nike-zoom-pegasus-turbo-shield-by-you.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/47d60f47-23fd-4504-908b-ee102920307b/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
        "https://static.nike.com/a/videos/q_90,vc_vp9/6f63111e-0ded-4599-a5a6-ad37a642d590/video.webm",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/77bd3139-8a05-454a-972f-3e230d3b5396/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/60e080d1-a769-44f9-a143-af0d9c800528/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4e1a1768-2ab4-486c-8330-417fe6a90e75/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/c3ef696f-4196-4018-8425-bdf50973d4aa/zoom-pegasus-turbo-2-mens-running-shoe-GcDSX3.jpg",
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/39530e3c-2330-48b9-a7a6-72eb0e8c35ae/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
        "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_0/ak2vb9rpasj0dtdm9dec/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/4b92a45c-d383-4304-9978-0e526c716949/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/3362e4d5-d686-46c2-81aa-7c2b5f4b409e/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/45278de1-946e-4d94-acd3-f31b59e4c3d4/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/82a06c4f-80d7-4852-84f4-46c6f2bd1451/air-zoom-pegasus-36-flyease-mens-running-shoe-1Fb6sV.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/rga8wrta1yx8x4biuwlw/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/bsfxz54ghtroyxftkuig/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/iw0wdqu1fnxhvvrtjvdq/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/zzuztrw41dvttlyj1uwe/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/n87q6r9dth8k161pqjyl/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/vk2ggdzpldifspphnrnv/zoom-fly-3-premium-mens-running-shoe-xsmTcQ.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-2dad30b7-2f76-4bd8-8ab0-0730932fff7b/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
        "https://static.nike.com/a/videos/q_90,vc_vp9/6aaae8dc-573f-416d-a53f-c01753c989ba/video.webm",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-7a370b1c-afc3-4ca2-b31d-3acec7dd45e1/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-cd423773-4d94-436a-9346-0561255d4854/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-fc09cf89-46df-47a5-8d74-a70b6136016f/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-d3869d0c-34e4-4cf7-b0aa-9502ee9bad66/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-f8349714-4f15-40f1-847e-b3340156eeaf/air-zoom-terra-kiger-6-mens-trail-running-shoe-kNcChX.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-ad95894c-4dee-40ea-9812-556a1dc9782c/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
        "https://static.nike.com/a/videos/q_90,vc_vp9/04fb8cb1-9d74-4e76-9f54-b9dc4c1ae886/video.webm",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-8763db1d-1d0c-414d-84fd-5d73d84f2395/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-2f0ed6f4-9ef3-41a8-974c-0069e5ab261b/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-fbe1288b-f9e1-493e-b055-9b91edd770ae/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-9bce6ea4-9128-4776-917c-8d1ca6d35fdc/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-94561130-6339-4255-8655-6389278cbb4c/wildhorse-6-mens-trail-running-shoe-r5NzHQ.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/reicequq4wevqtgtxpi6/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/rxofv4dzu4jekcjdl42c/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/m7jdoco7gidqzcbxsqiz/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/fnteuh0tzxwqxw2nwd72/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/by5c8jvgsuic3p8kmgdz/zoom-freak-1-basketball-shoe-tmk8Hw.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/isdasnfbj6x8sz4wbo3c/zoom-freak-1-basketball-shoe-tmk8Hw.jpg"
      ],
      [
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-66e2e324-bd18-4a75-b252-b8cf5c039006/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
        "https://static.nike.com/a/videos/t_PDP_1280_v1/f_auto,so_6.56/ggotayue2oltd4oikhy7/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-553bbc2a-a549-4178-b782-9ef66d7f7767/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-6a83a8dd-e53b-4158-adde-0fc788beceaa/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-07fb2d9b-2b68-43fd-ad62-ecfb354b2cef/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg",
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/i1-5c2e27ab-2b34-4005-823e-bcb8b9dbed05/air-zoom-vomero-14-womens-running-shoe-hK53Km.jpg"
      ],
      ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/aki5mq92ws4mdgfuijl5/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/pm2uiho39jtwm7ghdipa/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/jx4muj1n92xdld6zdd7n/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/uxxu2pg3xqu50jvpiaih/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/mjihumk0i0yjvrxlmppq/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg",
"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/to2h7zyw02fuhloqef0p/air-zoom-pegasus-36-womens-running-shoe-ksw5Hx.jpg"]
      
];

function getImages() {
    let index = Math.floor(Math.random() * players.length);
    return players[index];
}



module.exports = {
    randomGender,
    randomType,
    randomStyle,
    randomVariant,
    randomWeight,
    randomSizes,
    getImages
}