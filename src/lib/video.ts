// Videorna ligger hos Bunny Stream sedan oktober 2026 (flytten från Vimeo).
// Sajtens data och sidor använder fortfarande de gamla Vimeo-id:na som
// nycklar. Tabellen nedan pekar ut motsvarande video i Bunny-biblioteket,
// så att resten av koden inte behöver känna till Bunny.

const BIBLIOTEK = '791495';

const BUNNY: Record<string, string> = {
  '1181679102': '360f316e-26ba-477c-a7c3-cdf5e944b67c', // DTK
  '1181679386': '614c8070-0683-4b60-9084-0ef469c3de6a', // ELF
  '1181837285': '0a3b8c9b-4741-49ee-bda4-038a8e106224', // INTRO
  '1181679570': 'a0168a3c-53af-4733-9c34-9e5edf8d1a46', // KVA
  '1181679796': '3c6167c9-81e8-4c6e-8790-7f08536393fa', // LÄS
  '1181680021': 'a9f0c91c-4c07-47e7-a04e-ebe8c046fe5b', // MEK
  '1181680376': 'e230c500-9b6c-47f0-a346-894495401994', // NOG
  '1181680666': '708376b6-3f64-4bac-8ecb-4f3680351d93', // ORD
  '1181681156': '2356971d-e9b4-487e-9bb3-c876f7c8942b', // XYZ
  '1181680968': 'dbec5ca5-e937-42ce-b7d0-e853cf60a15d', // ÖVERBLICK
  '1182714952': '50bd76d4-92a0-4c09-b96c-c9f4fb872b12', // KVANT1 1
  '1182719341': '2e0a89b8-d4da-40f4-af84-98de78d6ae2b', // KVANT1 10
  '1182719553': 'd08e6c10-63c8-410d-8f2c-b7b348c405cb', // KVANT1 11
  '1182719755': '32e36d67-042e-4580-aac7-f8742ac2d9dc', // KVANT1 12
  '1182734977': '97c3b010-69c3-454c-b5fb-05caae6f538f', // KVANT1 13
  '1182735217': '8cc73a66-c3ba-41ac-aed4-12a35b09c101', // KVANT1 14
  '1183020198': '69f2694a-7c55-48bf-ab42-e6bea6ac5fda', // KVANT1 15
  '1182735282': '264b0814-6f2a-4f52-bc18-3f9103240c82', // KVANT1 16
  '1182736576': 'c729e2c4-3bea-4746-94cc-a240cf375469', // KVANT1 17
  '1182736871': '2c8c0a6c-0591-4985-88ab-b054b0216b71', // KVANT1 18
  '1182736933': 'b265e9b0-d6a6-49df-bfde-548011cdfc35', // KVANT1 19
  '1182715631': '4165651b-d35b-4819-a32a-8a6e923dee13', // KVANT1 2
  '1182904536': '7f5d875a-e304-4dd4-aeb1-ba3967b1590f', // KVANT1 20
  '1182905360': 'fc3adc19-c7d1-4213-a17a-82286ba4ff52', // KVANT1 21
  '1182905839': '6a2de79d-49cd-4f7b-ae7b-75ac9fb17fa2', // KVANT1 22
  '1182906113': '49596732-b176-4f4c-af86-75c1762a45c1', // KVANT1 23
  '1182908475': '1d22286f-20c2-488a-a473-0aba68cbe1e6', // KVANT1 24
  '1182909237': '4db8121d-7f1b-41e0-a035-4cc9ddb2e77a', // KVANT1 25
  '1182909569': 'dd8fd8e8-ae76-4b69-aeed-cebbbf0338c3', // KVANT1 26
  '1182910459': '37803e9b-e06b-4e1c-a758-d4ed16bd5d38', // KVANT1 27
  '1182911214': '31e3a029-8a1a-4149-bb1c-32d6f3401fc0', // KVANT1 28
  '1182912267': '84169c19-854e-49b1-a6e7-3371d5e3ef5e', // KVANT1 29
  '1182716185': 'b17db2cb-9ff0-4602-8886-2f807d82caa1', // KVANT1 3
  '1182912859': '3db60eec-1e35-44c5-81ee-bdaefe5a1a76', // KVANT1 30
  '1182913429': '6032b4ef-80ce-4c31-82a5-39747e9c1e37', // KVANT1 31
  '1182913782': '40527d78-4015-4514-8913-a460775874da', // KVANT1 32
  '1182914589': '19968552-cf67-491d-b18b-7d8f38e64127', // KVANT1 33
  '1182915329': 'd34d1a01-a80b-4c13-89dc-857d31183974', // KVANT1 34
  '1182915752': 'cf59f672-2fd1-4aa1-90f0-ae26039fa33d', // KVANT1 35
  '1182915909': 'd4f8ea05-2627-4302-93d8-ca81715173c8', // KVANT1 36
  '1182916334': 'ebf07e70-8a36-414d-a47b-db4716796b3a', // KVANT1 37
  '1182916502': 'dbd17070-e144-4daa-ac11-e42cd19476ed', // KVANT1 38
  '1182916621': '0f2f5b8f-3eeb-4e48-abb9-b7191a3fd20b', // KVANT1 39
  '1182716827': '0376e736-fbfd-4f7a-a939-aa190ebeb0e6', // KVANT1 4
  '1183052774': '7bad1353-6dc0-4fbd-bfc9-12291d476fb4', // KVANT1 40
  '1182716939': 'acec032d-1686-4e76-ac43-a8590f8e234e', // KVANT1 5
  '1182718030': 'd2bb961e-1eed-4bd5-9ed7-7c8be6483dae', // KVANT1 6
  '1182718336': 'e4b0b50b-3995-4854-8fc9-80cae346de99', // KVANT1 7
  '1182718722': '63d4d086-592d-4049-8225-d7c59e1a3398', // KVANT1 8
  '1182718994': '5d29ad11-f790-4957-a19e-28ca587862f3', // KVANT1 9
  '1183984771': '8a026309-eba9-4046-9143-2f132d9ff7f4', // KVANT2 1
  '1183890254': '4b0f553d-c040-428b-a08a-3d4b863bd0be', // KVANT2 10
  '1183890557': '592b8c7a-3245-4d23-adcc-497406b360b6', // KVANT2 11
  '1183981772': 'ba1d1afb-effc-45b2-8eed-77f0754ff07b', // KVANT2 12
  '1183891008': '57025e3c-96af-4e3f-841c-d74ae77a49ba', // KVANT2 13
  '1183891121': '5077c59f-ffba-479c-9e35-99b534b86ac8', // KVANT2 14
  '1183891404': 'f45e79ec-5e81-4693-99cf-0edf92fc36d8', // KVANT2 15
  '1183891611': 'ff1d8f20-a56e-4c73-8e89-110e67f36185', // KVANT2 16
  '1183891756': '4508eabb-7120-4086-b09e-ad1831073e1e', // KVANT2 17
  '1183891902': 'df281c0f-e937-453e-a08c-3ca2b2e8ae66', // KVANT2 18
  '1183892098': 'c93ff532-5e30-445d-ae5e-523871deeb1d', // KVANT2 19
  '1183888958': '58c19945-ecd8-49b5-a7f8-7a542415f2b9', // KVANT2 2
  '1183892338': '1d731d61-9364-4dcf-aa7a-e88c9147c466', // KVANT2 20
  '1183892559': '04eebd6f-2a4f-4068-ad6f-b05b28048549', // KVANT2 21
  '1183892737': 'b56ec8d7-1046-43d6-a15f-261de44a6765', // KVANT2 22
  '1183893245': '814d107d-5bd0-44b4-b21b-0354474c84a4', // KVANT2 23
  '1183893523': '31ee13bf-9c2c-4132-bd42-a7df1b2fea6e', // KVANT2 24
  '1183893654': 'c67cdb47-dda0-4400-8cf6-1e9205df1a6a', // KVANT2 25
  '1183894031': 'bc90e517-daf5-4d42-aa27-3bf4e65e66d2', // KVANT2 26
  '1183894336': '68d55bbb-f723-48db-94dd-568d9865fe14', // KVANT2 27
  '1183894741': '71231ce1-7314-41c3-9099-a712a75320cf', // KVANT2 28
  '1183895232': 'add624a4-8f76-47ad-a968-08d4ce496834', // KVANT2 29
  '1183889172': '25266b1b-eb5e-4e5f-89cd-8a7dd6366399', // KVANT2 3
  '1183895420': '5b55952d-197b-4c1c-b33e-11f7d0860fb6', // KVANT2 30
  '1183889295': 'b75a1869-e31e-452d-84c6-47501d238295', // KVANT2 4
  '1183889597': 'e696256c-ae53-4baf-9a2e-572f16d21873', // KVANT2 5
  '1183981613': '561a085e-d1f3-479b-afa5-70ffd0673c25', // KVANT2 6
  '1183889823': '72b92404-85bf-4427-a139-97c975df0937', // KVANT2 7
  '1183890024': '8e4d4a72-0d8b-482f-abf4-45a9898e5375', // KVANT2 9
  '1183556210': 'a44996dc-f378-4ccc-8588-57a970e726f3', // MATTE 1 riktig_1
  '1183665016': '5a211c5a-2651-46d5-9191-1ee63a5fd2b6', // MATTE 10
  '1183667894': 'aa267199-1a0a-4e20-aa40-df57516300f2', // MATTE 11
  '1183557361': 'f1c21fef-4c32-48f2-8f52-81ad4a27dc9e', // MATTE 2
  '1183651464': '447911c5-2b51-488d-b001-7602130c3658', // MATTE 3_1
  '1183653545': '5cfabb79-11fd-46b8-abb1-6d047f0970cc', // MATTE 4
  '1183654955': '23ece845-7677-458d-b1d0-d988778767ba', // MATTE 5
  '1183657756': '29b9c6a8-9cf3-465c-9b27-36cb91e4915d', // MATTE 6
  '1183659193': '11ac8fde-59e3-409a-91eb-e2c5b9433c7d', // MATTE 7
  '1183662551': '0b40c073-d0ed-4bb1-beb7-184af80b8d90', // MATTE 8
  '1183663962': '3b625ec7-385d-46a2-99a2-6a7ada96272f', // MATTE 9
  '1183677252': '3c934491-2f9e-4af5-aa17-bd2f4185db63', // MATTE INTRO
  '1182976246': '2a9e48b9-f100-4021-a81b-a7cccd26a9ed', // VERB1 1
  '1182977562': 'b78d08ea-84d4-48dd-94dd-499e0a74be56', // VERB1 10
  '1182977758': '19a4d4f0-dbe0-4909-95ed-23dc23335a25', // VERB1 11
  '1182978324': '8d15a18d-32ae-4188-a611-c5d62a7170a5', // VERB1 12
  '1182978936': '0da36cf2-a77b-49e9-b9d3-d530a6ec9ffc', // VERB1 13
  '1182980374': '83e21b0f-7f1b-48ae-8d5c-95581a8b08d4', // VERB1 14
  '1182981349': '49b455df-8e1f-4d10-8b78-5cf4451e7ab6', // VERB1 15
  '1182982257': '13faff83-1f30-48b3-9310-a86aaee9af22', // VERB1 16
  '1182983156': 'a33e9379-9036-4cf8-b7ae-9a8936a4294d', // VERB1 17
  '1182984175': 'b2358f2a-04c7-4542-a797-a36c36b35f0f', // VERB1 18
  '1182985226': 'cbb4614e-89e0-474c-acf9-f47b921a1d6f', // VERB1 19
  '1182976453': 'cc46071a-f13b-4f99-8559-5c7da335bf73', // VERB1 2
  '1182986181': '4418733e-efcc-4bf1-877f-856e1e15ef11', // VERB1 20
  '1182987145': '8395c63e-f791-41a8-bfb2-ad930f2648ee', // VERB1 21
  '1182987664': 'fbadef97-8ae6-4042-90aa-5008ed10a45f', // VERB1 22
  '1182988057': 'fa405bea-43d4-4402-a209-2cd6d317062d', // VERB1 23
  '1182988607': '86b50804-6546-48cf-a936-ed6c23cdd5db', // VERB1 24
  '1182989396': '49c95477-69b5-442b-aed3-33d76cfec355', // VERB1 25
  '1182989833': 'ba2b0cd6-1cf1-454f-9839-c7edd18ef46b', // VERB1 26
  '1182990194': 'ff24d36f-67f3-4d33-ab38-d6d8031bae3e', // VERB1 27
  '1182990618': '6ba83593-de42-4eca-b050-ec00d91c52e4', // VERB1 28
  '1182991236': '1906d530-0f27-4b2a-bb9b-840cce29cbed', // VERB1 29
  '1182976665': '7bd2958e-0972-409d-bfd8-32a28575c759', // VERB1 3
  '1182991653': '08696b6a-bec2-4ff3-b172-aa74679d41a6', // VERB1 30
  '1182976837': '7252adae-2883-4a3f-8946-857d9753314a', // VERB1 4
  '1182976916': '9e141357-807e-4f72-959b-298645e1f431', // VERB1 5
  '1182977047': '94086373-e42c-4c80-a4bb-02da40ae98a4', // VERB1 6
  '1182977161': 'b57de24a-2a44-4e88-945d-0807185c9718', // VERB1 7
  '1182977227': '08ea6598-eb12-4cf4-bfb9-caf8074950ee', // VERB1 8
  '1182977387': 'f5d21cf4-52c7-4c06-bcbf-b30e472ec976', // VERB1 9
};

export interface VideoVal {
  /** Starta direkt, för videor som besökaren själv har klickat fram. */
  autoplay?: boolean;
  /** Ladda iframen först när den närmar sig skärmen. */
  lazy?: boolean;
}

/** Finns videon hos Bunny? */
export function harVideo(vimeoId: string | null | undefined): boolean {
  return !!vimeoId && vimeoId in BUNNY;
}

/** Bunny-spelarens adress för en video, eller null om videon saknas. */
export function videoUrl(vimeoId: string | null | undefined, val: VideoVal = {}): string | null {
  if (!vimeoId || !(vimeoId in BUNNY)) return null;
  // preload=false gör att ingen video laddas ner förrän någon trycker på play,
  // vilket sparar trafik (det Bunny tar betalt för). Kvaliteten är inte spärrad
  // till spelarens storlek, så spelaren går upp till 1080p så fort besökarens
  // uppkoppling räcker.
  const spela = val.autoplay ? 'true' : 'false';
  return `https://player.mediadelivery.net/embed/${BIBLIOTEK}/${BUNNY[vimeoId]}?autoplay=${spela}&preload=${spela}`;
}

/** Hela iframe-taggen för en video, eller tom sträng om videon saknas. */
export function videoIframe(vimeoId: string | null | undefined, title: string, val: VideoVal = {}): string {
  const src = videoUrl(vimeoId, val);
  if (!src) return '';
  return `<iframe src="${src}" title="${title}" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"${val.lazy ? ' loading="lazy"' : ''}></iframe>`;
}
