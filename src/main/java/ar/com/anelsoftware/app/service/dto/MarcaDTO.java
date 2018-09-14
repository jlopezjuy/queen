package ar.com.anelsoftware.app.service.dto;

import javax.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Lob;

/**
 * A DTO for the Marca entity.
 */
public class MarcaDTO implements Serializable {

    private Long id;

    @NotNull
    private String nombre;

    @Lob
    private byte[] logo;
    private String logoContentType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public byte[] getLogo() {
        return logo;
    }

    public void setLogo(byte[] logo) {
        this.logo = logo;
    }

    public String getLogoContentType() {
        return logoContentType;
    }

    public void setLogoContentType(String logoContentType) {
        this.logoContentType = logoContentType;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        MarcaDTO marcaDTO = (MarcaDTO) o;
        if (marcaDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), marcaDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "MarcaDTO{" +
            "id=" + getId() +
            ", nombre='" + getNombre() + "'" +
            ", logo='" + getLogo() + "'" +
            "}";
    }
}
