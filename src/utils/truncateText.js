const truncateText = (text, maxLength) => {
  const isTruncated =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return isTruncated;
};

export default truncateText;
