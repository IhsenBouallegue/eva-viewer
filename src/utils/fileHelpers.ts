const downloadFile = ({
  data,
  fileName,
  fileType,
}: {
  data: string;
  fileName: string;
  fileType: string;
}) => {
  const blob = new Blob([data], { type: fileType });
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export const exportToJson = (
  e: { preventDefault: () => void },
  object: unknown
) => {
  e.preventDefault();
  downloadFile({
    data: JSON.stringify(object),
    fileName: "eva_parameters.json",
    fileType: "application/json",
  });
};
