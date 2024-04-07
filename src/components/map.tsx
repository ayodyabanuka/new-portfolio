import React, { useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import Image from 'next/image';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXlvZHlhIiwiYSI6ImNsdW1sZXpseDFjbGsyam8xdnU4MXdpb3EifQ.QRTWYNz6O1LEu37fc3jivw';

const MapboxComponent: React.FC = () => {
       useEffect(() => {
              // Initialize Mapbox map instance
              const map1 = new mapboxgl.Map({
                     container: 'map1',
                     style: 'mapbox://styles/mapbox/light-v11',
                     center: [79.8919, 6.7929],
                     zoom: 16,
                     dragPan: false,
                     scrollZoom: false,
                     boxZoom: false,
                     dragRotate: false,
                     keyboard: false,
                     doubleClickZoom: false,
                     touchZoomRotate: false,
                     logoPosition: 'top-left',
                     accessToken: MAPBOX_ACCESS_TOKEN
              });
              const map2 = new mapboxgl.Map({
                     container: 'map2',
                     style: 'mapbox://styles/mapbox/dark-v11',
                     center: [79.8919, 6.7929],
                     zoom: 16,
                     dragPan: false,
                     scrollZoom: false,
                     boxZoom: false,
                     dragRotate: false,
                     keyboard: false,
                     doubleClickZoom: false,
                     touchZoomRotate: false,
                     logoPosition: 'top-left',
                     accessToken: MAPBOX_ACCESS_TOKEN
              });

              // Cleanup function to remove map instance on component unmount
              return () => {
                     map1.remove()
                     map2.remove()
              };

       }, []);

       return (
              <div className='h-full rounded-2xl'>
                     <div id="map1" style={{ position: 'relative', width: '100%' }} className='h-full group rounded-2xl block dark:hidden'>
                            {/* Custom image positioned absolutely at the center */}
                            <div className='bg-white px-3 py-2 rounded-full z-50 ' style={{ position: 'absolute', top: '35%', left: '48%', transform: 'translate(-35%, -48%)' }}>
                                   <Image src="/meimoji.png" width={100} height={100} className=' w-12 group-hover:w-[53px] transition-all duration-300 ease-in-out' alt="Custom Marker" />
                            </div>
                            <div className='bg-white h-3 w-3 rounded-full z-50 animate-pulse' style={{ position: 'absolute', top: '52%', left: '48%', transform: 'translate(-52%, -48%)' }}>

                            </div>
                     </div>
                     <div id="map2" style={{ position: 'relative', width: '100%' }} className='h-full group rounded-2xl hidden dark:block'>
                            {/* Custom image positioned absolutely at the center */}
                            <div className='bg-white px-3 py-2 rounded-full z-50 ' style={{ position: 'absolute', top: '35%', left: '48%', transform: 'translate(-35%, -48%)' }}>
                                   <Image src="/meimoji.png" width={100} height={100} className=' w-12 group-hover:w-[53px] transition-all duration-300 ease-in-out' alt="Custom Marker" />
                            </div>
                            <div className='bg-white h-3 w-3 rounded-full z-50 animate-pulse' style={{ position: 'absolute', top: '52%', left: '48%', transform: 'translate(-52%, -48%)' }}>

                            </div>
                     </div>
              </div>
       )
};

export default MapboxComponent;
