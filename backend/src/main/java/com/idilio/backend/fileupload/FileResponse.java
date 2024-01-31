package com.idilio.backend.fileupload;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class FileResponse {
    private String filename;
    private String fileDownloadUri;
    private String fileType;
    private long size;
}
