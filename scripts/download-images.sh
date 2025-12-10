#!/bin/bash
# Script to download all images from Figma MCP localhost server

BASE_URL="http://localhost:3845/assets"
IMAGES_DIR="public/images"

# Create directories
mkdir -p "$IMAGES_DIR/hero"
mkdir -p "$IMAGES_DIR/logo"
mkdir -p "$IMAGES_DIR/features"
mkdir -p "$IMAGES_DIR/icons"
mkdir -p "$IMAGES_DIR/integrations"
mkdir -p "$IMAGES_DIR/dock"
mkdir -p "$IMAGES_DIR/ui"
mkdir -p "$IMAGES_DIR/backgrounds"

# List of image hashes from the Figma design - ALL images
declare -a images=(
    # Hero section
    "96749e2af7f886656604cddaafbe655fad97e20f:hero/desktop-wallpaper.png"
    
    # Logo images
    "5676c90804bce52d7f0a0244cce4840cedeaad88:logo/final-logo-1.png"
    "c1699e81242a154c3525c573c74124972c3cf16f:logo/final-style-1.png"
    
    # Features section images
    "3a414b4387dbc05bc057b8b8c5eff9773b95fc6e:features/image-16.png"
    "c207dfce29d52e58eaaf74724578b30aa9bc765c:features/member-image.png"
    "3ae7a297d905efb9f06d59e62790768291736cbc:features/member-image-1.png"
    "630c5a4e8fd9095b926401d886b2869fe11f6948:features/member-image-2.png"
    "0b7b83da6912ad5649521961dfc3eff87e55583e:features/member-image-3.png"
    "f7ac3e69f58047547ac9c589accb9a0ebda3347f:features/member-image-4.png"
    "4b38a5cacab7464c58b61183661cd590e8818b3e:features/image-17.png"
    "f5a9e8ba4160714897ee8188806510fe1a969b5d:features/demo.png"
    "ede2c313ecc46ebdcdf2cff3decefd49e0d1d620:features/layer-01.png"
    
    # Dock icons (img1-img19)
    "6d8828ab49f3978eceb1cbe68cb8c8d942ebc3b4:dock/img1.png"
    "6c8f755bbc023c13781e629099989038cf10d22e:dock/img2.png"
    "26071006aff38525e156e86e844e3d4276398c7d:dock/img3.png"
    "7ff53a11e82ed29c4e8cf59e4bbf3f3fffe34c8f:dock/img4.png"
    "be778fedf7cbc689ee6acf607734caf7fef5c4a6:dock/img5.png"
    "1ff1079355cfd41de2721a6080148b1ce1ae4fbd:dock/img6.png"
    "dbba28abb122c2620a71cff56bfd42f54486330d:dock/img7.png"
    "dec235d50ca70ffaf6ac152f1b19402a65774072:dock/img8.png"
    "79a99b188cf6ad90a60145ea4ada02ff988ac8e5:dock/img9.png"
    "58c857e92ee3b0874d86bd9988f1fb7ed4b41b11:dock/img10.png"
    "2d5834ece4d7544d3ea9533c4859d69bd6ad8d83:dock/img11.png"
    "9e11efdf1a74e907dad73d0f04db476f2fae1c8a:dock/img12.png"
    "2d9232afc7540010cab6f8974e6d73d00d66684b:dock/img13.png"
    "10a816b2170d07f70ed52e6767607f6373285b05:dock/img14.png"
    "52ae5c227a1f8fa41b4ea8b2e67124b2e9b61aff:dock/img15.png"
    "dc782324a389a78731f67ae381c1746cc3a9d4fa:dock/img16.png"
    "757d2ce72fc8c47b67d9a7929d6abfeea6751e56:dock/img17.png"
    "39e2e1525d1994febe39a64e39423868935eb186:dock/img18.png"
    "0a352c577b554e5c636bee224d86aa7b88aba486:dock/img19.png"
    
    # UI elements (img20-img28)
    "20.png:ui/img20.png"
    "21.png:ui/img21.png"
    "22.png:ui/img22.png"
    "23.png:ui/img23.png"
    "24.png:ui/img24.png"
    "25.png:ui/img25.png"
    "26.png:ui/img26.png"
    "27.png:ui/img27.png"
    "28.png:ui/img28.png"
    
    # Ellipses
    "Ellipse50.png:ui/ellipse50.png"
    "Ellipse51.png:ui/ellipse51.png"
    "Ellipse3.png:ui/ellipse3.png"
    "Ellipse4.png:ui/ellipse4.png"
    "Ellipse7.png:ui/ellipse7.png"
    "Ellipse8.png:ui/ellipse8.png"
    "Ellipse2.png:ui/ellipse2.png"
    "Ellipse6.png:ui/ellipse6.png"
    "Ellipse27.png:ui/ellipse27.png"
    
    # Frames
    "Frame.png:ui/frame.png"
    "Frame1.png:ui/frame1.png"
    "Frame2.png:ui/frame2.png"
    "Frame3.png:ui/frame3.png"
    "Frame4.png:ui/frame4.png"
    "Frame5.png:ui/frame5.png"
    "Frame6.png:ui/frame6.png"
    "Frame7.png:ui/frame7.png"
    "Frame8.png:ui/frame8.png"
    "Frame9.png:ui/frame9.png"
    
    # Groups
    "Group2.png:ui/group2.png"
    "Group3.png:ui/group3.png"
    "Group4.png:ui/group4.png"
    "Group5.png:ui/group5.png"
    "Group6.png:ui/group6.png"
    "Group7.png:ui/group7.png"
    "Group8.png:ui/group8.png"
    "Group9.png:ui/group9.png"
    "Group10.png:ui/group10.png"
    "Group11.png:ui/group11.png"
    "Group12.png:ui/group12.png"
    "Group143726173.png:ui/group143726173.png"
    "Group1000001592.png:icons/checkmark.png"
    
    # SVGs
    "Svg.png:ui/svg.png"
    "Svg1.png:ui/svg1.png"
    
    # Icons
    "Icon1.png:icons/icon1.png"
    
    # Integration logos
    "dbba28abb122c2620a71cff56bfd42f54486330d:integrations/slack-logo.png"
    "dec235d50ca70ffaf6ac152f1b19402a65774072:integrations/google-meet.png"
    "79a99b188cf6ad90a60145ea4ada02ff988ac8e5:integrations/microsoft.png"
    "58c857e92ee3b0874d86bd9988f1fb7ed4b41b11:integrations/zoom-logo.png"
    "757d2ce72fc8c47b67d9a7929d6abfeea6751e56:integrations/salesforce.png"
    "39e2e1525d1994febe39a64e39423868935eb186:integrations/whatsapp.png"
    "0a352c577b554e5c636bee224d86aa7b88aba486:integrations/hubspot.png"
    "dc782324a389a78731f67ae381c1746cc3a9d4fa:integrations/macos.png"
    "1ff1079355cfd41de2721a6080148b1ce1ae4fbd:integrations/windows.png"
    "7ff53a11e82ed29c4e8cf59e4bbf3f3fffe34c8f:integrations/linux.png"
    
    # About section icons
    "2d5834ece4d7544d3ea9533c4859d69bd6ad8d83:icons/icon-1.png"
    "9e11efdf1a74e907dad73d0f04db476f2fae1c8a:icons/icon-2.png"
    "2d9232afc7540010cab6f8974e6d73d00d66684b:icons/icon-3.png"
    "10a816b2170d07f70ed52e6767607f6373285b05:icons/icon-4.png"
    "52ae5c227a1f8fa41b4ea8b2e67124b2e9b61aff:icons/icon-5.png"
    
    # Background elements
    "427dc3c16ffbe3119a4859f3c5252c403ca09230:backgrounds/rectangle5.png"
    "Vector102.png:backgrounds/vector102.png"
)

echo "Downloading images from Figma MCP server..."
for image in "${images[@]}"; do
    IFS=':' read -r hash path <<< "$image"
    # Handle both hash-based URLs and direct filename URLs
    if [[ $hash == *.png ]]; then
        url="$BASE_URL/$hash"
    else
        url="$BASE_URL/$hash.png"
    fi
    output="$IMAGES_DIR/$path"
    
    # Create directory if it doesn't exist
    mkdir -p "$(dirname "$output")"
    
    echo "Downloading: $path from $url"
    curl -s "$url" -o "$output" || echo "Failed to download $path"
done

echo "Image download complete!"
