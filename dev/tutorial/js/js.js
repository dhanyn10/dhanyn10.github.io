function gantiTag(kode)
{
    kode = kode.replace(new RegExp("<","g"), "[");
    kode = kode.replace(new RegExp(">","g"), "]");
    return kode;
}