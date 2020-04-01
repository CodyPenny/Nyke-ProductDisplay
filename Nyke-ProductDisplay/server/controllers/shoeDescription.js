module.exports = {
  getInfo: (shoe) => {

  }
}


const dataShoeDescriptions = () => {


}


let generateReactPhotos = (shoename) => {
  //fix this option
  if(shoename.includes('JoyRide')){
    return
  }
  if(shoename.includes('HyperSet')){
    return
  }
  if(shoename.includes('Terra Gobe')){
    return
  }
  if(shoename.includes('Sertu')){
    return
  }
  if(shoename.includes('Ianga')){
    return
  }
  if(shoename.includes('Presto')){
    return
  }
  if(shoename.includes('Element')){
    return
  }
  if(shoename.includes('A.I.R')){
    return
  }
  if(shoename.includes('Infinity')){
    return
  }
  if(shoename.includes('Vision')){
    return
  }
  return sampleReactDefault
}

let generateZoomPhotos = (shoename) => {
  if(shoename.includes('Vomero')){
    return
  }
  if( shoename.includes('Freak')){
    return
  }
  if(shoename.includes('WildHorse')){
    return
  }
  if(shoename.includes('Terra Kiger')){
    return
  }
  if(shoename.includes('Fly 3')){
    return
  }
  if(shoename.includes('Pegasus') && shoename.includes('FlyEase')){
    return
  }
  if(shoename.includes('Pegasus') && shoename.includes('Turbo')){
    return
  }
  if(shoename.includes('Pegasus') && shoename.includes('Vaporfly')){
    return
  }
  return sampleZoomDefault
}

let generateFreeRnPhotos = (shoename) => {
  if(shoename.includes('Motion')){
    return
  }
  if(shoename.includes('FlyKnit')){
    return
  }
  if(shoename.includes('NRG')){
    return
  }
  if(shoename.includes('5.0')){
    return
  }
  if(shoename.includes('3.0')){
    return
  }
  if(shoename.includes('2018')){
    return
  }
  return sampleFreeRunPhotos
}


// nike vision
const vision = [["SURREAL COMFORT. BORN FROM DREAMS.", "The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vivid colors combine in a design influenced by the exaggerated world of our dreams, while React foam and an ultraplush tongue provide surreal comfort. DIMSIX on the tongue tab rises high off the collar to add just a touch of Nike’s own origin story."], ["Dreamworld Extravagance", "The colors are inspired by Mexico City's famous Casa Gilardi. Richly textured fabrics add to the continuously shifting sensation. In combination with a transparent heel clip and distorted sides, they create a unique layered look."], ["Futuristic Materials", "The revolutionary seamless mesh on the upper allows for color pops and surreal textures. Its subtle pattern, which was inspired by poison dart frogs, adds the perfect amount of bite to your look."], ["Dreamlike Comfort", "Nike React foam delivers unrivaled all-day comfort while the ultra plush tongue combines with the padded heel for a soft, dreamlike feel."], ["DIY Style", "Exposed stitching on the heel and tongue combines with the patchwork eyestays for a multi-dimensional, DIY look."]]
/*
    Product Details
    Rubber pods on sole add traction and durability
    D/MS/X label on pull tabs and insole
    Outlined Swoosh is printed on side
*/



// Nike TerraKiger
const terraKiger = [["TOUGH TERRAIN TACKLER.", "The Nike Air Zoom Terra Kiger 6 is built to take on wet and rocky trails. Lightweight in design, it features a sleeker look with a woven heel for a secure fit and feel."] , ["Faster, Sleeker, Stronger", "Mesh at the forefoot feels lightweight and enhances ventilation. A woven heel delivers a secure, stable fit."], ["Cushioned Responsiveness", "Nike React technology delivers a smooth, responsive ride. A Zoom Air unit in the heel provides extra cushioning."], ["Multi-Surface Traction","Multidirectional traction lugs in the forefoot and heel are made from high-abrasion rubber for enhanced grip on descents and ascents. A rubber pod at the midfoot helps deliver wet-surface traction."]]
/*
More Benefits
Padded tongue helps relieve pressure caused by foot swelling over long mileage runs.
Segmented rock plate in the forefoot helps shield your foot on rough terrain without sacrificing flexibility or ground feel.
Midfoot lacing system helps provide snug support.
*/


//Nike React Infinity Run Flyknit
const infinity= [["DESIGNED TO KEEP RUNNING, FEARLESSLY.", "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel. Lace up and feel the potential as you hit the road."], ["A Lightweight Fit", "An all-new version of Flyknit is stronger and more durable than previous versions. Lightweight and flexible, it features 3 distinct layers to help keep your foot secure."], ["A Stable Feel", "Higher foam stack heights provide a softer feel. A wider shape provides a more stable ride, helping release energy with every step."], ["A Smooth Ride", "The shape of the Nike React foam midsole provides support for the 3 phases of a runner's stride. It helps create flexibility at toe-off, a smooth ride at mid-stance and cushioning at contact."]]
/* More Benefits
  Less material in the shoe means you're closer to the foam, creating a softer, more responsive experience.
  Increased rubber at the outsole helps deliver traction and durability.
 */


//Nike CruzrOne
const cruzr = [["MADE TO KEEP YOU MOVING.", "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next."], ["Rocker-Shaped Design", "The outsole is angled to create an incredibly smooth heel-to-toe transition during use."], ["Made to Move", "Stacked Nike React foam in the heel feels incredibly soft and tapers to the toe, allowing you to move freely."], ["All-Day Wear", "The low-cut collar adds a sleek, streamlined look. Thick padding and super-soft wool lining add to the comfort."], ["Supportive And Ventilated", "No-sew details combine with stitched overlays for added durability, while mesh and perforations on the sides help your foot breathe."]]
/*
  More Benefits
  Rubber sole adds traction and durability.
  Wool lining is quick-drying and can be worn with or without socks.
  Midsole design mimics circular pattern on the heel for a unified look.
 */



//Nike Joyride CC
["UNPARALLELED COMFORT EVERY DAY.",
"Lounge wherever you go and let the Nike Joyride CC take you into a new world of cozy by placing your feet directly on the soft cushioning of its innovative bead-pods. Bold color-blocking and exaggerated textures add unrivaled depth to your fun, edgy attitude."]

["Innovative Comfort","With Nike Joyride technology, pods filled with tiny foam beads conform to your foot for underfoot comfort."]

["All-Day Wear", "Lightweight Cushlon foam midsole feels comfortable for all-day wear."]

["Playful Attitude", "Stretchy upper features stitched-on overlays and bold colors for a snug feel with attitude."]

/*
More Benefits
    Padded collar feels soft and comfortable.
    Pull tab on heel and tongue provides ease of entry.
    Shown: Vast Grey/Atmosphere Grey/Thunder Grey/Blue Hero
    Style: AO1742-004 */








/*

Zoom-Ultra-light Nike ZoomX foam delivers Nike Running's greatest energy return yet.
    -Engineered heel collar tapers away from your foot for comfort around your Achilles tendon.
    -Angled heel supports initial touchdown and provides a smooth transition.


ZoomX- Nike ZoomX foam delivers Nike Running’s greatest energy return yet, and NEXT%-NEXT% adds more ZoomX for responsive comfort on race day.
Trail-Outsole lugs optimize traction when running uphill.
Vaporfly- VaporWeave material up top is an engineered woven mesh that’s light and breathable while giving a secure, comfortable fit.
FlyKnit - Flyknit constructed upper provides lightweight breathability and support.




Nike Air Zoom  Pegasus 36 Trail
FIND YOUR WINGS.
An icon trades pavement for path with the Nike Air Zoom Pegasus 36 Trail. Give your feet some fresh air in a perforated mesh upper, as double Zoom Air units underfoot cushion your stride. Opposing lugs on outsole optimize traction on your uphill climbs.

Benefits

    Perforated mesh and synthetic upper lets your foot breathe.
    Zoom Air units in heel and forefoot cushion your stride.
    Outsole lugs optimize traction on roads and trails alike.
    Widened forefoot gives you a roomier fit.
    Overlay forms around the eyelet and integrates with a traditional lacing system for secure lockdown.
    Cushlon foam cushions your foot and offers a supportive feel.











Nike Wildhorse 6
STABLE COMFORT FOR THE TRAILS.
The Nike Wildhorse 6 keeps it stable, secure and lightweight on the trail. An updated outsole delivers the traction you need, while a foam midsole keeps you cushioned on your run.

Trail-Ready Traction
A full-rubber outsole features abrasion-resistant materials in the forefoot and heel, with sticky rubber in the middle for grip. An anti-clog coating across the outsole helps keep dirt out.

Responsive Cushioning
Nike React foam provides a soft, smooth ride that adds a little spring to your step. Extra cushioning in the heel creates stability and helps keep your foot on the platform.

Breathable and Long-lasting
Mesh at the forefoot enhances ventilation and combines with materials along the toe to help prevent abrasion.

More Benefits
    Collar around the ankle hugs your foot while helping prevent dirt and debris from entering the shoe.
    Thin tongue features segmented padding to help cut down on lace pressure.
    Utility tab in the back for easy on and off.














Testing
In testing*, the Nike React Infinity Run reduced injuries by 52% compared to the Nike Air Zoom Structure 22. *The Nike React Infinity Run reduced running injuries by 52% compared to the Nike Air Zoom Structure 22 in a study of 226 men and women during a 12 week run training program (injury = missing 3 or more consecutive runs due to running related pain). Our study found that 30.3% of Nike Air Zoom Structure 22 runners experienced an injury but only 14.5% of Nike React Infinity Run runners experienced an injury.




["LIGHTWEIGHT COMFORT. MODERN STYLE.", "Nike's first lifestyle Air Max meets the softest, smoothest and most resilient foam yet in the Nike Air Max 270 React. The design draws from the Air Max pantheon, showcasing Nike's greatest innovation with its large window. Details on the upper take inspiration from bubble wrap and add a playful, modern style that looks as good as it feels."]

["All-Day Comfort The eye-catching Max Air 270 unit and full Nike React foam midsole deliver all-day comfort from heel to toe."]

["Light as Air Nike React technology delivers an extremely smooth ride, reduces weight and adds flexibility. Fabric on the upper provides lightweight comfort."]

Product Details
    Synthetic and fabric upper
    Swoosh keychain inspired by air freshener


["MAX AIR.", "MAX COMFORT."]
Inspired by energy patterns radiating from Earth—like the flow of lava and ocean waves—the Nike Air Max 200 offers a springy Air Max unit for flawless comfort. With exceptional cushioning and modern detailing, this shoe radiates cool.
["Maximum Air", "Visible from the side, the brand-new Max Air unit provides more Air underfoot while the lightweight, breathable mesh in the upper contours the foot. Rubber under the Max Air unit creates a larger profile."]
["All-Day Comfort", "Cushlon foam offers remarkable underfoot cushioning for all-day comfort. Exposed foam in the sole helps to reduce weight and adds flexibility."]
["Modern Look", "Lightweight TPU frame and no-sew skins skins create a modern, sporty aesthetic."]
["Added Durability", "Full heel-to-toe rubber coverage on the outsole increases durability."]




["OG STYLE MEETS", "MODERN COMFORT."]


Redesigned for casual wear, the Nike Air Max 90 SE stays true to its '90s running roots. Bold colors combine with Max Air cushioning for all-day comfort while iconic details like the rubber Waffle outsole, stitched overlays and TPU counter nod to heritage style.
Benefits
    Removable logo at tongue lets you switch up your look.
    Max Air cushioning in the heel provides all-day comfort.
    Padded collar feels soft and comfortable.
    Rubber Waffle sole adds traction and durability.
    Foam midsole offers durable cushioning.


    const presto = ["BIG COMFORT. BIGGER PERSONALITY.", "The Nike React Presto Premium features an innovative React foam midsole that delivers a futuristic look and bouncy, lightweight feel for all-day comfort with a whole lot of personality."]

Benefits
    Nike React technology delivers an extremely smooth ride.
    Stretchy mesh upper provides breathability and a relaxed feel.
    Numerous lacing options let you customize the look.
    Stretchy textile sleeve for a sock-like fit and lets you take the shoe on and off easily.
    TPU cage reimagines the classic Presto cage in a more organic shape, providing a contoured fit to your foot.
    Rubber toe tip enhances durability.



TOUGH TERRAIN TACKLER.
The Nike Air Zoom Terra Kiger 6 is built to take on wet and rocky trails. Lightweight in design, it features a sleeker look with a woven heel for a secure fit and feel.
Faster, Sleeker, Stronger
Mesh at the forefoot feels lightweight and enhances ventilation. A woven heel delivers a secure, stable fit.
Cushioned Responsiveness
Nike React technology delivers a smooth, responsive ride. A Zoom Air unit in the heel provides extra cushioning.
Multi-Surface Traction
Multidirectional traction lugs in the forefoot and heel are made from high-abrasion rubber for enhanced grip on descents and ascents. A rubber pod at the midfoot helps deliver wet-surface traction.
More Benefits
    Padded tongue helps relieve pressure caused by foot swelling over long mileage runs.
    Segmented rock plate in the forefoot helps shield your foot on rough terrain without sacrificing flexibility or ground feel.
    Midfoot lacing system helps provide snug support.




LIGHTWEIGHT SUPPORT. SLEEK DESIGN.
The Nike Air Zoom Structure 22 Men's Running Shoe looks fast and feels secure. Engineered mesh, a heel overlay and dynamic support throughout the midfoot all work together to provide a smooth, stable ride.
Benefits
    Flywire cables secure the top of your foot.
    Engineered mesh provides targeted ventilation and support.
    Dynamic Support provides a smooth, stable transition.
    Partial bootie wraps the foot for a snug, comfortable fit. Notches at the tongue provide easy on and off.
    Zoom Air unit in the forefoot delivers responsive, low-profile cushioning.
    Duralon blown rubber in the forefoot enhances cushioning.






Mesh Breathability

The lofted mesh and synthetic upper is lighter than its predecessor, and the translucent material makes it look as breathable as it feels.

Comfortable for Distance

A partial inner sleeve from toe to midfoot, combined with a more traditional shape from midfoot to heel is designed to help you train faster, longer.

Absorbs Impact

The rubber outsole helps absorb impact and provide multi-surface traction.

More Benefits
    An ultralight Nike ZoomX midsole delivers Nike Running's greatest energy return yet.
    The engineered heel collar tapers away from foot for comfort around your Achilles tendon.
    An angled heel optimizes initial touchdown and provides a smooth transition.



*/