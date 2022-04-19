function validBraces(braces) {
  const depth = [];
  for (const brace of braces) {
    switch (brace) {
      case "(":
        depth.push(")");
        break;
      case "[":
        depth.push("]");
        break;
      case "{":
        depth.push("}");
        break;
      case ")":
      case "]":
      case "}":
        if (depth.pop() !== brace) return false;
    }
  }
  return depth.length === 0;
}
