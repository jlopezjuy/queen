package ar.com.anelsoftware.app.service.mapper;

import ar.com.anelsoftware.app.domain.*;
import ar.com.anelsoftware.app.service.dto.MarcaDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Marca and its DTO MarcaDTO.
 */
@Mapper(componentModel = "spring", uses = {})
public interface MarcaMapper extends EntityMapper<MarcaDTO, Marca> {



    default Marca fromId(Long id) {
        if (id == null) {
            return null;
        }
        Marca marca = new Marca();
        marca.setId(id);
        return marca;
    }
}
