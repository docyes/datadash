function datadash(el, options){
    var nodeName, 
        attribute, 
        kv = {},
        options = options || {},
        attributes = el.attributes, 
        l = attributes.length;
    options.attribute = options.attribute || 'data-';
    for (var i = 0; i < l; i++) {
        attribute = attributes[i];
        nodeName = attribute.nodeName;
        if (nodeName.indexOf(options.attribute) !== 0) {
            continue;
        }
        kv[attribute.nodeName] = attribute.nodeValue;
    }
    return kv;
}