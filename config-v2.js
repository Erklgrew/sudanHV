

var config = {
    style: 'mapbox://styles/erikrenglish/clsxewtus000o01qpaby39hnh',
    accessToken: 'pk.eyJ1IjoiZXJpa3JlbmdsaXNoIiwiYSI6ImNqNXdnZDdnNTBlMDcyd3FzNHg5YjNsN3kifQ.kDgqHDJ00xCjvUXy8x57UA',
    showMarkers: false,
    markerColor: 'purple',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    projection: 'mercator',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'sud-1',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: 'Map of Sudan prior to 2011',
            image: '',
          caption: '',
            description: 
'Sudan is a land of catastrophic conflict.',
          location: {
                center: [29.76770, 14],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sudan-combine', 
                     opacity: 1,
                 },
              {
                     layer: 'south-sudan', 
                     opacity: 0,
                 },
              {
                     layer: 'water', 
                     opacity: 1,
                 },
            
            ],
            onChapterExit: [
                 {
                     layer: 'sudan-combine',
                     opacity: 1,
                 },
              
            ]
        },
      {
            id: 'sud-2',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: '',
            image: '',
          caption: '',
            description: 
'Half a century of war led to the starvation, displacement, and deaths of millions and, eventually, the 2011 <a href="https://www.ohioswallow.com/9780821422427/south-sudan/">secession of South Sudan</a>.',
          location: {
                center: [29.76770, 14],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'south-sudan', 
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                {}
            ]
        },{
            id: 'sud-3',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: '',
            image: '',
          caption: '',
            description: 
'But in recent decades, the geography of violence has increasingly moved to western and central Sudan.',
          location: {
                center: [29.76770, 14],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sudan-reg-bound', 
                     opacity: 0.5,
                 },
              {
                     layer: 'sudan-reg-bound-line', 
                     opacity: 0.5,
                 }
            ],
            onChapterExit: [
                   {
                     layer: 'sudan-reg-bound', 
                     opacity: 0,
                 },
              {
                     layer: 'sudan-reg-bound-line', 
                     opacity: 0.5,
                 }
            ]
        },
      {
            id: 'sud-4',
            alignment: 'left',
            hidden: false,
            title: 'Mean of daily accumulated precipitation in millimeters (1991-2020)',
            legend: '',
            image: 'https://thebulletin.org/wp-content/uploads/2024/03/Mean-daily-precip-legend.png',
          caption: '',
            description: 
'In the vast regions of Darfur and Kordofan, rainfall is particularly haphazard, so pastoralist communities have relied for generations on mobility for their livestock’s survival.',
          location: {
                center: [29.76770, 14],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'sudan-moisture', 
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'sudan-moisture',
                     opacity: 0,
                 }
            ]
        },
      {
            id: 'sud-5',
            alignment: 'left',
            hidden: false,
            title: 'Days with maximum average temperature over 40°C (104°F) per year (1991-2020)',
            legend: '',
            image: 'https://thebulletin.org/wp-content/uploads/2024/02/Days-over-40-legend.png',
          caption: '',
            description: 
'Soaring maximum and average temperatures are challenging these well-established transhumance patterns, encouraging them to explore other migration routes and greener pastures for their herds. This adaptation, in turn, risks unsettling the coexistence between people who predominantly derive their income from agro-pastoralism and others who are mostly sedentary farmers.',
          location: {
                center: [29.76770, 14],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'days-over-40', 
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'days-over-40',
                     opacity: 0,
                 }
            ]
        },
      {
            id: 'sud-6',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: '',
            image: '',
          caption: '',
            description: 
'Conflict in these areas has emerged in myriad forms—insurgencies against the government in Khartoum; inter-communitarian clashes between groups armed with increasingly sophisticated weaponry; and <a href="https://ethz.ch/content/dam/ethz/special-interest/gess/cis/center-for-securities-studies/resources/docs/SAS-Tubu%20Trouble,%20State%20and%20Statelessness%20in%20the%20Chad-Sudan-Libya%20Triangle.pdf">sprawling criminal rackets</a> involved in the smuggling of livestock, weapons, and much else across the borders with Chad, Libya, and South Sudan.',
          location: {
                center: [29.76770, 14],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     
                 },
            ],
            onChapterExit: [
                 {
                     layer: 'fews-may',
                     opacity: 0,
                 }
            ]
        },
      {
            id: 'sud-7',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: '',
            image: '',
          caption: '',
            description: 
'Since April 2023, many localized conflicts have continued or been subsumed by Sudan’s latest national civil war between the Sudan Armed Forces (SAF) and the paramilitary Rapid Support Forces (RSF), which nominally fall under the SAF hierarchy but whose de facto financial, military, and political autonomy became <a href="https://www.cambridge.org/core/journals/journal-of-modern-african-studies/article/surviving-revolution-and-democratisation-the-sudan-armed-forces-state-fragility-and-security-competition/795745EFAB65FE4AE422AA192F5EBA7E">impossible for the country’s regular army to accept</a>.',
          location: {
                center: [29.76770, 14],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'fews-may', 
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'fews-may',
                     opacity: 0,
                 }
            ]
        },
      {
            id: 'sud-8',
            alignment: 'left',
            hidden: false,
            title: '',
            legend: '',
            image: '',
          caption: '',
            description: 
'RSF units and allied militia have predominantly recruited from pastoralist communities in Darfur and Kordofan—establishing themselves as the <a href="https://www.hrw.org/news/2023/11/26/sudan-new-mass-ethnic-killings-pillage-darfur">pre-eminent force in western Sudan</a>, using ethnic cleansing to drive farmers off their land, capturing water holes, and changing in regions where generations of customary authority structures regulated the balance in access to land and pasture between ethno-linguistic groups.',
          location: {
                center: [29.76770, 14],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'fews-may', 
                     opacity: 1,
                 }
            ],
            onChapterExit: [
                 {
                     layer: 'fews-may',
                     opacity: 0,
                 }
            ]
        },
     
      
    ]
};
