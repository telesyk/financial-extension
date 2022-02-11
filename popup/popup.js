const params = {
  img: {
    title: 'Logotype',
    size: '48',
  },
  elementId: {
    logo: 'extLogo',
    name: 'extName',
    version: 'extVersion',
  },
  captions: {
    version: 'Extension version: ',
  },
};

function createImage() {
  const { img } = params;
  const image = document.createElement('img');
  image.setAttribute('alt', img.title);
  image.setAttribute('width', img.size);

  return image;
}

function getManifestData(manifest) {
  const extLogo = manifest.icons[params.img.size];
  const extVersion = manifest.version;
  const extName = manifest.name;

  return {
    extLogo,
    extName,
    extVersion,
  };
}

function getElements(ids) {
  const elementLogo = document.getElementById(ids.logo);
  const elementVersion = document.getElementById(ids.version);
  const elementName = document.getElementById(ids.name);

  return {
    elementLogo,
    elementName,
    elementVersion,
  };
}

const { extLogo, extName, extVersion } = getManifestData(browser.runtime.getManifest());
const imgElement = createImage();
imgElement.setAttribute('src', extLogo);

const { elementId, captions } = params;
const { elementName, elementLogo, elementVersion } = getElements(elementId);

document.title = extName;
elementName.textContent = extName;
elementVersion.textContent = captions.version + extVersion;
elementLogo.appendChild(imgElement);
